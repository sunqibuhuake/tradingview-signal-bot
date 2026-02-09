
import { PrismaClient } from '../generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg'

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prismaClientSingleton = () => {
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
  return new PrismaClient({
    adapter
  })
}


export let prisma: ReturnType<typeof prismaClientSingleton>
if (process.env.NODE_ENV === "production") {
  prisma = prismaClientSingleton();
} else {
  if (!global.prisma) {
    global.prisma =prismaClientSingleton()
  }
  prisma = global.prisma
}


export default prisma;
