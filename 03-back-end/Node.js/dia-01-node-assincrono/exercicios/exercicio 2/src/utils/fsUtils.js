const fs = require('fs').promises;
const path = require('path');

const DATA_PATH = '../../data/simpsons.json';

const readData = async () => {
    try{
    const data = await fs.readFile(path.resolve(__dirname, DATA_PATH));
    const values = JSON.parse(data);

    return values;
    } catch(error) {
      console.error(`Erro na leitura do arquivo ${error}`);
    }
}

const writeNewData = async () => {
    try{ 
        const oldData = await readData();
        const newData = oldData.filter((values) => Number(values.id) !== 10 && Number(values.id) !== 6 );
        await fs.writeFile(path.resolve(__dirname, DATA_PATH), JSON.stringify(newData));
    } catch (error) {
        console.error(error);
    }
}

const createNewFile = async () => {
    try{
        const oldData = await readData();
        const newData = oldData.filter((values) => Number(values.id) === 1 || Number(values.id) === 4);
        console.log(newData);
        await fs.writeFile('../data/simpsonFamily.json', JSON.stringify(newData));
    } catch (error) {
        console.error(error);
    }
}

readData();

module.exports = {
    readData,
    writeNewData,
    createNewFile,
}