const axios = require('axios');
var ficheiros = '';

async function baixaJSON() { //acessa o repositório com o banco de dados

  let res = await axios.get('https://static.openfoodfacts.org/data/delta/index.txt');

    return res.data;
  
}

ficheiros = baixaJSON();

module.exports = ficheiros; //exportado para index.js