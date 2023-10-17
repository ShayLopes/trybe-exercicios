const fs = require('fs').promises;
const path = require('path');

const readData = async () => {
    try{
    const data = await fs.readFile(path.resolve(__dirname, '../../data/simpsons.json'));
    const values = JSON.parse(data);

    return values;
    } catch(error) {
      console.error(`Erro na leitura do arquivo ${error}`);
    }
}

readData();

module.exports = {
    readData,
}