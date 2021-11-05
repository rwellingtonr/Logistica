-- CreateTable
CREATE TABLE "produtos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tipo" TEXT NOT NULL,
    "item" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "entrada" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "custos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "custo_unitario" REAL NOT NULL,
    "margem_de_lucro" REAL NOT NULL,
    "produto_id" TEXT NOT NULL,
    CONSTRAINT "custos_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "produtos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "colaboradore" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT,
    "funcao" TEXT,
    "turno" TEXT NOT NULL DEFAULT 'ADM',
    "email" TEXT,
    "produto_id" TEXT,
    CONSTRAINT "colaboradore_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "produtos" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "venda" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cliente" TEXT NOT NULL,
    "receita_bruta" REAL NOT NULL,
    "receita_liquida" REAL NOT NULL,
    "produto_id" TEXT NOT NULL,
    "colaborador_id" TEXT NOT NULL,
    CONSTRAINT "venda_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "produtos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "venda_colaborador_id_fkey" FOREIGN KEY ("colaborador_id") REFERENCES "colaboradore" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "produtos_item_key" ON "produtos"("item");

-- CreateIndex
CREATE UNIQUE INDEX "colaboradore_email_key" ON "colaboradore"("email");

-- CreateIndex
CREATE UNIQUE INDEX "colaboradore_produto_id_key" ON "colaboradore"("produto_id");
