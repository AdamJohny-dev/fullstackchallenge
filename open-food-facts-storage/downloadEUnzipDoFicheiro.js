const fs = require("fs");
const axios = require("axios")
const zlib = require("zlib");
const { pipeline } = require("stream");
const separaProduto = require("../api-rest-food/pegaCodigoDoProduto");


// Usar as duas linhas abaixo para função assincrona sem promise explicita
const { promisify } = require('util');
const pipe = promisify(pipeline);
const listProdutos = '';
async function decompressFile(from, to) {
    
      const gzip = zlib.createGunzip();
      gzip.setEncoding("utf8");
      const writeStream = fs.createWriteStream(to);
      
      // Usar isso se for fazer uma função sem deixar promise explicito
      await pipe(from, gzip, writeStream)
  }
  

module.exports = {
  downloadEUnzip: async (maisRecente) => {
    const url = `https://static.openfoodfacts.org/data/delta/${maisRecente}`;
    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream'
    });
   
      await decompressFile(response.data, "./descompresso.json");
      
      (async () => {
        console.log("Conteúdo de um ficheiro: " + await separaProduto.produto("./descompresso.json"));
    
    })()
    
    
  },
};
