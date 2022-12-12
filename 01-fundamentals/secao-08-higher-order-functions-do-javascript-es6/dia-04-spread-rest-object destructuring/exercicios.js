// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maçã', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['sacola', 'vaso', 'planta'];

const fruitSalad = (fruit, additional) => {
  const lista = [...fruit, ...additional];
  return lista;
};

console.log(fruitSalad(specialFruit, additionalItens));

///

const countParams = (...args) => {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
  }
  
  console.log(countParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
  console.log(countParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.
  
//

// definindo o objeto
const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      name: 'Tatooine',
      population: '200000',
    },
  };

console.log(character.description.jedi);
