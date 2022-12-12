//exercício 1

const newEmployees = (geraEmail) => {
    const employees = {
      id1: geraEmail('Pedro Guerra'),
      id2: geraEmail('Luiza Drumond'),
      id3: geraEmail('Carla Paiva'),
    };
    return employees;
  };

const geraEmail = (nomeCompleto) => {
    const email = nomeCompleto.toLowerCase().replaceAll(' ', '_');
    return { nomeCompleto, email: `${email}@trybe.com`};
};

console.log(newEmployees(geraEmail));

// exercício 2 

function checaValor(numeroApostado, valorSorteado){
    return numeroApostado === valorSorteado ? 'Parabéns, você ganhou!' : 'Tente novamente.';
}

const resultadoSorteio = (numeroApostado, checaValor) => {
    const valorSorteado = Math.trunc(Math.random() * 6 - 1) + 1;
    return checaValor(numeroApostado, valorSorteado);
};

console.log(resultadoSorteio(2, checaValor));

// exercício 3 

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));

// exercício 4 

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

console.log(books.find((book) => book.author.birthYear === 1947).author.name);

const expectedResult = 'Duna';
const smallerName = () => {
  let nameBook;
  books.forEach((value) => {
    if(!nameBook || value.name.length < nameBook.length){
        nameBook = value.name;
    }
  });
  return nameBook;
}

smallerName();