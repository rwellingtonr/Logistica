-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_custos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "custo_unitario" REAL NOT NULL,
    "margem_de_lucro" REAL NOT NULL,
    "produto_id" TEXT,
    CONSTRAINT "custos_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "produtos" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_custos" ("custo_unitario", "id", "margem_de_lucro", "produto_id") SELECT "custo_unitario", "id", "margem_de_lucro", "produto_id" FROM "custos";
DROP TABLE "custos";
ALTER TABLE "new_custos" RENAME TO "custos";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
