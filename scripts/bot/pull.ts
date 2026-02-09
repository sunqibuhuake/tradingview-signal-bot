import { CryptoTradingBot } from "@/src/bot-crypto";
import { writeFileSync } from 'fs';


(async () => {
    const bot = new CryptoTradingBot();
    console.log('pulling markets')
    const markets = await bot.pullMarkets()
    console.log(markets)
    writeFileSync('./markets.json', JSON.stringify(markets, null, 2))
})()