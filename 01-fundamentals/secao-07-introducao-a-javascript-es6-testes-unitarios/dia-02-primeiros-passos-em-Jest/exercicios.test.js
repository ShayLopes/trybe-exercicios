const { myRemove, myFizzBuzz, mapString, encode, decode, techList, hydrate} = require("./exercicios");

const array = [1, 2, 3, 4];

describe("Testes do exercício 1", () => {
  test("Remove 3", () => {
    expect(myRemove(array, 3)).not.toContain(3);
  });
  test("Não retorna o array [1, 2, 3, 4]", () => {
    expect(myRemove(array, 3)).not.toBe([1, 2, 3, 4]);
  });
  test("Retorna o array esperado", () => {
    expect(myRemove(array, 5)).toEqual(array);
  });
});

describe("Testes do exercício 2", () => {
  test("É divisivel por 3 e 5", () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
  });
  test("É divisivel por 3", () => {
    expect(myFizzBuzz(3)).toBe("fizz");
  });
  test("É divisivel por 5", () => {
    expect(myFizzBuzz(5)).toBe("buzz");
  });
  test("Não é divisivel por 3 e por 5", () => {
    expect(myFizzBuzz(22)).toBe(22);
  });
  test("Não é um número", () => {
    expect(myFizzBuzz("a")).toEqual(false);
  });
});

describe('Testes do exercício 3', () => {
    test('Decode é uma função', () => {
        expect(typeof decode).toEqual('function');
    });
    test('Enconde é uma função', () => {
        expect(typeof encode).toEqual('function');
    }); 
    test('Converte A,E,I,O,U em 1,2,3,4,5 respectivamente', () => {
        expect(encode('a,e,i,o,u')).toEqual('1,2,3,4,5');
    });
    test('Converte 1,2,3,4,5 em A,E,I,O,U respectivamente', () => {
        expect(decode('1,2,3,4,5')).toEqual('a,e,i,o,u');
    });
    test('Verifica outras letras', () => {
        expect(encode('a,e,i,o,u,l,m,n')).toEqual('1,2,3,4,5,l,m,n');
    });
    test('Verifica outros números', () => {
        expect(decode('1,2,3,4,5,6,7,8')).toEqual('a,e,i,o,u,6,7,8');
    });
    test('Verifica se (ENCODE) a string tem o mesmo número de caracteres', () => {
        expect(encode('trybe').length).toEqual(5);
    });
    test('Verifica se (DECODE) a string tem o mesmo número de caracteres', () => {
        expect(decode('trybe').length).toEqual(5);
    });
});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
