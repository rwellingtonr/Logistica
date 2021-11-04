/*
  Warnings:

  - You are about to drop the column `produto_id` on the `custos` table. All the data in the column will be lost.
  - Added the required column `custo_id` to the `produtos` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_custos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "custo_unitario" REAL NOT NULL,
    "margem_de_lucro" REAL NOT NULL
);
INSERT INTO "new_custos" ("custo_unitario", "id", "margem_de_lucro") SELECT "custo_unitario", "id", "margem_de_lucro" FROM "custos";
DROP TABLE "custos";
ALTER TABLE "new_custos" RENAME TO "custos";
CREATE TABLE "new_produtos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tipo" TEXT NOT NULL,
    "item" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "entrada" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "colaborador_id" TEXT NOT NULL,
    "custo_id" TEXT NOT NULL,
    CONSTRAINT "produtos_colaborador_id_fkey" FOREIGN KEY ("colaborador_id") REFERENCES "colaboradore" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "produtos_custo_id_fkey" FOREIGN KEY ("custo_id") REFERENCES "custos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_produtos" ("colaborador_id", "descricao", "entrada", "id", "item", "quantidade", "tipo") SELECT "colaborador_id", "descricao", "entrada", "id", "item", "quantidade", "tipo" FROM "produtos";
DROP TABLE "produtos";
ALTER TABLE "new_produtos" RENAME TO "produtos";
CREATE UNIQUE INDEX "produtos_item_key" ON "produtos"("item");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
