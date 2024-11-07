const somatorio = require('../funcoes/somatorio');

test('deve somar corretamente os números fornecidos', () => {
    expect(somatorio([1, 2, 3, 4, 5])).toBe(15);
});

test('deve lançar erro para entrada inválida (vetor vazio)', () => {
    expect(() => somatorio([])).toThrow("Entrada inválida. Por favor, insira um vetor.");
});
