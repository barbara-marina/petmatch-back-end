/*
  Warnings:

  - A unique constraint covering the columns `[petId]` on the table `adoptions` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "adoptions_petId_key" ON "adoptions"("petId");
