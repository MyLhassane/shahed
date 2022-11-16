/*
  Warnings:

  - You are about to drop the column `url` on the `netflix_table` table. All the data in the column will be lost.
  - Added the required column `link` to the `netflix_table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "netflix_table" DROP COLUMN "url",
ADD COLUMN     "link" TEXT NOT NULL;
