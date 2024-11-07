const numPrimo = require('../funcoes/numPrimo');

test('deve retornar true para um número primo', () => {
    expect(numPrimo(7)).toBe(true);
});

test('deve retornar false para um número não primo', () => {
    expect(numPrimo(10)).toBe(false);
});
