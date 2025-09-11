import { jest } from '@jest/globals';

import JogadorService from "../Services/jogadorService.js";

const mockRepo = {
    criaJogador: jest.fn().mockResolvedValue({ id: 1, nome: "Yuji", idade: 25, time: "Time A", pontos: 0 }),
    buscarPorId: jest.fn().mockResolvedValue({ id: 1, nome: "Yuji", idade: 25, time: "Time A", pontos: 10 }),
    atualizaPontos: jest.fn().mockResolvedValue({ id: 1, pontos: 20 }),
};
const mockRepo2 = {
    criaJogador: jest.fn().mockResolvedValue({ id: 1, nome: "Yuji", idade: 25, time: "Time A", pontos: 0 }),
    buscarPorId: jest.fn().mockResolvedValue(null),
    atualizaPontos: jest.fn().mockResolvedValue({ id: 1, pontos: 20 }),
};

test("Serviço cria jogador com persistência", async () => {
    const service = new JogadorService(mockRepo);
    const { jogador, persistido } = await service.criar({ nome: "Yuji", idade: 25, time: "Time A" });

    expect(jogador.getNome()).toBe("Yuji");
    expect(persistido.id).toBe(1);
});

test("Serviço adiciona pontos persistindo", async () => {
    const service = new JogadorService(mockRepo);
    const atualizado = await service.adicionarPontosPersistindo(1, 10);

    expect(atualizado.pontos).toBe(20);
});

test("Serviço tenta adicionar pontos persistindo, mas não encontra jogador", async () => {
    const service = new JogadorService(mockRepo2);
    await expect(service.adicionarPontosPersistindo(1, 10))
        .rejects.toThrow("Jogador não encontrado");


});