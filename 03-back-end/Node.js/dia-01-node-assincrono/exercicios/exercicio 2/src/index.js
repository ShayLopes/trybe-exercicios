const { readData } = require('./utils/fsUtils');

const main = async() => {
    const data = await readData();
    console.log(data);
}

main();