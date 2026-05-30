import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// On Vercel (serverless), SQLite is not available — skip Prisma init if no DATABASE_URL
export const db =
  globalForPrisma.prisma ??
  (process.env.DATABASE_URL
    ? new PrismaClient({ log: ['query'] })
    : (null as unknown as PrismaClient))

if (process.env.NODE_ENV !== 'production' && process.env.DATABASE_URL) globalForPrisma.prisma = db