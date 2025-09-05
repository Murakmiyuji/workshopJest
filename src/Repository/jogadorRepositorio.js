import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class JogadorRepositorio {
	async criaJogador({nome, idade, time, pontos = 0}) {
		return prisma.jogador.create({
			data: { nome, idade, time, pontos },
		});
	}

	async buscarPorId(id) {
		return prisma.jogador.findUnique({ where: { id } });
	}

	async atualizaPontos(id, pontos) {
		return prisma.jogador.update({
			where: { id },
			data: { pontos },
		});
	}
}

export default JogadorRepositorio;