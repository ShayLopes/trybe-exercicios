const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    const personalData = Object.values(order);
    const addressData = Object.values(order.address);
    const deliveryData = Object.values(order.order.delivery);

    console.log(`Olá ${deliveryData[0]}, entrega para: ${personalData[0]}, Telefone: ${personalData[1]}, R. ${addressData[0]}, Nº: ${addressData[1]}, AP: ${addressData[2]}`);
  };
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    order.name = 'Luiz Silva';
    order.order.pizza.marguerita.price = 25;

    const personalData = Object.values(order);
    const margueritaData = Object.values(order.order.pizza.marguerita);
    const pepperoniData = Object.values(order.order.pizza.pepperoni);
    const pizzasName = Object.keys(order.order.pizza);
    const cokeData = Object.values(order.order.drinks.coke);

    console.log(`Olá ${personalData[0]}, o total do seu pedido de ${pizzasName[0]}, ${pizzasName[1]} e ${cokeData[0]} é R$ ${margueritaData[1] + pepperoniData[1] + cokeData[1]}.`);
    
  };
  
  orderModifier(order);

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const adicionaTurno = (objeto, chave, valor) => {
    objeto[chave] = valor;
}

const listaKeys = (objeto) => {
    return Object.keys(objeto);
}

const tamanhoObjeto = (objeto) => {
    return Object.keys(objeto).length;
}

const listaValues = (objeto) => {
    return Object.values(objeto);
}

const totalDeEstudandtes = (obj1, obj2, obj3) => {
    valor1 = Object.values(obj1);
    valor2 = Object.values(obj2);
    valor3 = Object.values(obj3);

    return valor1[1] + valor2[1] + valor3[1];
}

const valorDaChave = (objeto, i) => {
    valor = Object.values(objeto);
    return valor[i];
}

const verificaChaveValor = (obj, key, value) => {
    const entries = Object.entries(obj);
    let isEqual = false;
    for (let index in entries) {
      if (entries[index][0] === key && entries[index][1] === value) isEqual = true;
    }
    return isEqual;
  };
  

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const getNumberOfStudentsMath = (obj) => {
    let total = 0;
    const keys = Object.keys(obj);
    for (index in keys) {
      if(obj[keys[index]].materia === 'Matemática'){
      total += obj[keys[index]].numeroEstudantes;
      }
    }
    return total;
  }
console.log(getNumberOfStudentsMath(allLessons));

const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const values = Object.values(obj);
  for (index in values) {
    if (values[index].professor === name) {
      allLessons.push(values[index].materia)
      allStudent += values[index].numeroEstudantes;
    }
  }
  return { aulas: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));

adicionaTurno(lesson2, 'turno', 'noite');

// console.log(lesson2);

// console.log(listaKeys(lesson3));

// console.log(tamanhoObjeto(lesson1));

// console.log(listaValues(lesson2));

// console.log(allLessons);

// console.log(totalDeEstudandtes(lesson1, lesson2, lesson3));

// console.log(valorDaChave(lesson1, 0));

// console.log(verificaChaveValor(lesson3, 'turno', 'noite'));
