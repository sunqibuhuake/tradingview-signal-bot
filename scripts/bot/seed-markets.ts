import 'dotenv/config';
import { PrismaClient, MarketType, CryptoType } from '../../generated/prisma';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import marketsData from './markets.json';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// TradingView type 到 CryptoType 的映射
const cryptoTypeMapping: Record<string, CryptoType> = {
    spot: CryptoType.SPOT,
    perpetual: CryptoType.PERPETUAL,
    futures: CryptoType.FUTURES,
    swap: CryptoType.PERPETUAL,  // swap 通常指永续合约
};

// 提取基础货币和计价货币
function extractCurrencies(symbol: string): { base: string; quote: string } {
    // 常见计价货币
    const quotes = ['USDT', 'USDC', 'USD', 'BTC', 'ETH', 'BNB', 'BUSD'];
    
    for (const quote of quotes) {
        if (symbol.endsWith(quote)) {
            const base = symbol.slice(0, -quote.length);
            return { base, quote };
        }
    }
    
    // 如果没有匹配，尝试从中间分割（如 "BTC/USD"）
    if (symbol.includes('/')) {
        const [base, quote] = symbol.split('/');
        return { base: base.trim(), quote: quote.trim() };
    }
    
    // 默认返回整个 symbol 作为 base
    return { base: symbol, quote: 'UNKNOWN' };
}

// 从 description 提取币种全名
function extractCoinName(symbol: string, description: string): string {
    if (description.includes('/')) {
        return description.split('/')[0].trim();
    }
    
    const { base } = extractCurrencies(symbol);
    return base;
}

// 生成显示名称
function generateDisplayName(symbol: string): string {
    const { base, quote } = extractCurrencies(symbol);
    return `${base}/${quote}`;
}

// 生成图标 URL（使用 CryptoCompare 或占位符）
function getIconUrl(symbol: string): string {
    const { base } = extractCurrencies(symbol);
    // 可以替换为真实的图标服务，如: https://www.cryptocompare.com/media/...
    return `https://placehold.co/100x100/3B82F6/FFFFFF/png?text=${base}`;
}

async function main() {
    console.log('🌱 开始导入交易标的数据...\n');

    // 删除现有的加密货币数据
    const deleteResult = await prisma.market.deleteMany({
        where: {
            type: MarketType.CRYPTO
        }
    });
    console.log(`🗑️  删除 ${deleteResult.count} 条现有数据\n`);

    // 导入新数据
    let successCount = 0;
    let errorCount = 0;

    for (const market of marketsData) {
        try {
            const { base, quote } = extractCurrencies(market.symbol);
            
            await prisma.market.create({
                data: {
                    name: extractCoinName(market.symbol, market.description),
                    code: market.symbol,
                    symbol: market.id,  // "BINANCE:BTCUSDT"
                    type: MarketType.CRYPTO,
                    
                    // 交易所信息
                    exchange: market.exchange,
                    fullExchangeName: market.fullExchange,
                    
                    // 显示信息
                    displayName: generateDisplayName(market.symbol),
                    description: market.description,
                    icon: getIconUrl(market.symbol),
                    
                    // 加密货币专用字段
                    cryptoType: cryptoTypeMapping[market.type] || CryptoType.SPOT,
                    baseCurrency: base,
                    quoteCurrency: quote,
                    
                    // 状态
                    isActive: true,
                    isPriority: false,
                    sortOrder: 0,
                    
                    // 同步状态
                    lastSyncAt: new Date(),
                    syncStatus: 'success',
                    
                    // 元数据
                    metadata: {
                        originalType: market.type,
                        source: 'tradingview',
                        importedAt: new Date().toISOString(),
                    },
                },
            });
            
            successCount++;
            console.log(`✅ ${market.symbol.padEnd(15)} - ${market.description}`);
        } catch (error: any) {
            errorCount++;
            console.error(`❌ ${market.symbol.padEnd(15)} - ${error.message}`);
        }
    }

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`🎉 导入完成！`);
    console.log(`   ✅ 成功: ${successCount} 条`);
    console.log(`   ❌ 失败: ${errorCount} 条`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
}

main()
    .then(async () => {
        await prisma.$disconnect();
        await pool.end();
    })
    .catch(async (e) => {
        console.error('❌ 导入过程出错:', e);
        await prisma.$disconnect();
        await pool.end();
        process.exit(1);
    });
