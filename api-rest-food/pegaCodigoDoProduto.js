var fs = require('fs');
var mongoose = require('mongoose');
var assert = require('assert').strict;
const db = require('../database/connection');
const codigosProntos = require('./pegaListaDeProdutos');
var produtosCodificados = new mongoose.Schema({}, { strict: false });
var ProdutosCodificados = mongoose.model('produtosCodificados', produtosCodificados);


module.exports = {

  produto: (path) => {

    async function leConteudo() {

      var numTotalProdutos = 0;
      var ficheiroDeProdutos = fs.readFileSync(path).toString();
      var todosOsProdutos = ficheiroDeProdutos.split('\n');
      var quantProdutosSeparados = ficheiroDeProdutos.split('\n', 1);

      for (produto in todosOsProdutos) {
        numTotalProdutos++;
    
      }

      db.on('error', console.error.bind(console, 'connection error:'));
      db.once('open', function () {
        console.log("Connection Successful!")

        //As funcionalidades abaixo foram projetadas para serem usadas por buttons
        // Por isso estão isoladas

        //Descomente o código abaixo se for inserir o code dos produtos do ficheiro 
        //na collection ProdutosCodificados.

        // for (inc = 0; inc < numTotalProdutos - 1; inc++) {

        //   var input = todosOsProdutos[inc];

        //   data = [
        //     { input }, //dados inseridos com chaves devido a alguns caracteres invalidos
        //   ]
        //   var insert = 1;
        //   ProdutosCodificados.collection.insertMany(data, function (err, r) {
        //     assert.strictEqual(null, err);
        //     assert.equal(1, r.insertedCount);
        //     console.log("Quantidade de inserts: " + insert);
        //     insert++;

            
        //   })
        // }


        //Após a inserção, descomente este código para puxar os codigos da collection.
        // var listaDeCodigos = []; //armazena apenas os códigos dos produtos disponíveis no ficheiro
        // var query = ProdutosCodificados.find({}, "input");
        // query.exec(function (err, codigosProdutos) {
        //   var teste = 0;
        //   if (err)
        //     return console.log(err);
        //   codigosProdutos.forEach(function (codigoProduto) {
        //     teste++;
        //     var intermed = codigoProduto.toString().substr(53,57)
        //      .split('"',1);
        //      listaDeCodigos.push(intermed);

        //     
        //     console.log("Numero de vezes: " + teste);

        //   });
        //   codigosProntos.armazenaLista(listaDeCodigos);
        // });


      });
      //db.close();



      return numTotalProdutos;

    }

    return leConteudo();
  },

}












