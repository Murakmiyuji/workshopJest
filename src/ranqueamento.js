export function gerarRanking(jogadores) {
    return [...jogadores].sort((a, b) => b.getPontos() - a.getPontos());
}
