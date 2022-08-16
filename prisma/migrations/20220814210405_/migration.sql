-- CreateTable
CREATE TABLE "adopters" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "urlImage" TEXT NOT NULL DEFAULT 'https://i.ibb.co/JdX0kyB/logo-Pet-Match.png',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "adopters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ongs" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "urlImage" TEXT NOT NULL DEFAULT 'https://i.ibb.co/JdX0kyB/logo-Pet-Match.png',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ongs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pets" (
    "id" SERIAL NOT NULL,
    "ongId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "weigth" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "story" TEXT NOT NULL,
    "isAdopted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "petImages" (
    "id" SERIAL NOT NULL,
    "petId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "petImages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adoptions" (
    "id" SERIAL NOT NULL,
    "petId" INTEGER NOT NULL,
    "adopterId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "adoptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "messages" (
    "id" SERIAL NOT NULL,
    "ongId" INTEGER NOT NULL,
    "adopterId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "adopters_email_key" ON "adopters"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ongs_email_key" ON "ongs"("email");

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "ongs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "petImages" ADD CONSTRAINT "petImages_petId_fkey" FOREIGN KEY ("petId") REFERENCES "pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adoptions" ADD CONSTRAINT "adoptions_petId_fkey" FOREIGN KEY ("petId") REFERENCES "pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adoptions" ADD CONSTRAINT "adoptions_adopterId_fkey" FOREIGN KEY ("adopterId") REFERENCES "adopters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "ongs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_adopterId_fkey" FOREIGN KEY ("adopterId") REFERENCES "adopters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
