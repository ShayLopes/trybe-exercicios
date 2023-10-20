const { readData, writeNewData, createNewFile } = require('./utils/fsUtils');

const getCharacterById = async (id) =>{
    const data = await readData();
    const chosenSimpson = data.find((simpson) => Number(simpson.id) === id);
    if(!chosenSimpson) throw new Error('id não encontrado');
    return chosenSimpson;
}

const run = async () => {
    try {
        const character = await getCharacterById(1);
        await writeNewData();
        await createNewFile();
    } catch (error) {
        console.error(error);
    }
};

run();