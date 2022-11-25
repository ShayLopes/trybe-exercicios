function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }

  function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }

  const mapString = (objectMap, string) => {
    const splitString = string.split('');
    const mappedArray = [];
    for (let index = 0; index < splitString.length; index += 1) {
      const character = splitString[index];
      const mappedValue = objectMap[character];
      
      if (mappedValue) {
        mappedArray.push(mappedValue);
      } else {
        mappedArray.push(character);
      }
    }
    return mappedArray.join('');
  }
  const encode = (string) => {
    const map = {
      a: 1,
      e: 2,
      i: 3,
      o: 4,
      u: 5,
    };
    return mapString(map, string);
  }
  const decode = (string) => {
    const map = {
      1: 'a',
      2: 'e',
      3: 'i',
      4: 'o',
      5: 'u',
    };
    return mapString(map, string);
  }
  
function techList (tecs, name){
    if(tecs.length === 0) return 'Vazio!';

    const newArr = [];
    for(i of tecs.sort()){
        newArr.push({
            tech: i,
            name,
        });
    }
    return newArr;
}

function hydrate (string){
    let total = 0; 
    for(i of string.split('')){
        if(!isNaN(i) && i !== ' '){
            i = parseInt(i);
            total += i;
        }
    }
    if(total <= 1){
        return `${total} copo de água`;
    } else {
        return `${total} copos de água`;
    }
}

console.log(hydrate('3 cerveja, 4 catuaba'));

module.exports = { myRemove, myFizzBuzz, mapString, encode, decode, techList, hydrate}