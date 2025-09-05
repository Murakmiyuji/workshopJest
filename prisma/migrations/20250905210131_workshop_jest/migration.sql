-- CreateTable
CREATE TABLE "public"."Jogador" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "time" TEXT NOT NULL,
    "pontos" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Jogador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Jogo" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Jogo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."JogadorJogo" (
    "id" SERIAL NOT NULL,
    "jogadorId" INTEGER NOT NULL,
    "jogoId" INTEGER NOT NULL,
    "vencedor" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "JogadorJogo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."JogadorJogo" ADD CONSTRAINT "JogadorJogo_jogadorId_fkey" FOREIGN KEY ("jogadorId") REFERENCES "public"."Jogador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."JogadorJogo" ADD CONSTRAINT "JogadorJogo_jogoId_fkey" FOREIGN KEY ("jogoId") REFERENCES "public"."Jogo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
