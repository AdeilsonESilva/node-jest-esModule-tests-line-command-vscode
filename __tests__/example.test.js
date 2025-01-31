import { jest } from "@jest/globals";

// Mock da função sum
jest.unstable_mockModule("../src/sum.js", () => ({
  default: jest.fn(() => 42), // Mock do export default
}));

// Importa o módulo mockado
const { default: mockedSum } = await import("../src/sum.js");

test("a função sum retorna o valor mockado", () => {
  // Chama a função sum mockada
  const result = mockedSum(1, 2);

  // Verifica se o resultado é o valor mockado
  expect(result).toBe(42);

  // Verifica se o mock foi chamado corretamente
  expect(mockedSum).toHaveBeenCalledWith(1, 2);
});
