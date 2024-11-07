function ordenacao(vetor) {
    if (!Array.isArray(vetor) || vetor.length === 0) {
        throw new Error("Entrada inválida. Por favor, insira um vetor.");
    }

    for (const elemento of vetor) {
        if (typeof elemento !== 'number') {
            throw new Error("Por favor, insira apenas números no vetor.");
        }
    }

    for (let i = 0; i < vetor.length; i++) {
        for (let j = 0; j < vetor.length - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                let aux = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = aux;
            }
        }
    }

    return vetor;
}

module.exports = ordenacao;