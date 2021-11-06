/*
  Warnings:

  - Added the required column `item` to the `venda` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_venda" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "item" TEXT NOT NULL,
    "cliente" TEXT NOT NULL,
    "receita_bruta" REAL NOT NULL,
    "receita_liquida" REAL NOT NULL,
    "colaborador_id" TEXT,
    CONSTRAINT "venda_colaborador_id_fkey" FOREIGN KEY ("colaborador_id") REFERENCES "colaboradore" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_venda" ("cliente", "colaborador_id", "id", "receita_bruta", "receita_liquida") SELECT "cliente", "colaborador_id", "id", "receita_bruta", "receita_liquida" FROM "venda";
DROP TABLE "venda";
ALTER TABLE "new_venda" RENAME TO "venda";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
