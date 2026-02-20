import 'dotenv/config';
import { PrismaClient, MarketType, CryptoType } from '../../generated/prisma';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

import bcrypt from 'bcryptjs';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });


async function main() {
  console.log('🌱 开始数据库初始化...');

  // 创建管理员账户
  const adminEmail = 'admin@tradingview.bot';
  const adminPassword = 'admin123456'; // 请在生产环境中修改

  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      password: hashedPassword,
      name: '系统管理员',
      role: 'ADMIN',
      credits: 0,
    },
  });

  console.log('✅ 管理员账户已创建:', {
    email: admin.email,
    password: '请使用 admin123456 登录后立即修改密码',
  });

  console.log('\n🎉 数据库初始化完成！');
  console.log('\n📝 管理员登录信息:');
  console.log('   Email:', adminEmail);
  console.log('   Password:', adminPassword);
  console.log('\n⚠️  请登录后立即修改密码！');
}

main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error('❌ 数据库初始化失败:', e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });
