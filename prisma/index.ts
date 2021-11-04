import { PrismaClient } from "@prisma/client"

// Conecta ao banco de dados

const prismaClient = new PrismaClient()

export default prismaClient