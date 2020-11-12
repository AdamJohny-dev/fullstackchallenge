const axios = require("axios");
var mongoose = require('mongoose');
var assert = require('assert').strict;
var produtos = new mongoose.Schema({}, { strict: false });
var Produto = mongoose.model('produtos', produtos);
var decisao = 0;

module.exports = {

  getListaDeProdutos: () => {
    return Produto;
  },

  armazenaLista: (listaDeCodigos) => {

    var lista = listaDeCodigos;
    var produtosProntosJSON = [];
    var imported = new Date();
    var dataEHora = imported.getFullYear() + "-"
      + (imported.getMonth() + 1) + "-"
      + imported.getDate() + "T"
      + imported.getHours() + ":"
      + imported.getMinutes() + ":"
      + imported.getSeconds() + "Z";

    const status = ({ //enum
      DRAFT: 'draft',
      TRASH: 'trash',
      PUBLISHED: 'published'
    });

    console.log("Lista: " + lista[0]);
    //Este arquivo gera o JSON do produto no formato esperado, utilizando seu code.
    async function baixaJSON() {
      for (produtoPronto = 0; produtoPronto < 21; produtoPronto++) {
        let res = await axios.get('https://world.openfoodfacts.org/api/v0/product/' + lista[produtoPronto] + '.json');
        
        produtosProntosJSON[produtoPronto] =
          [{
            "code": res.data.product.code,
            "barcode": res.data.product.code + "(EAN/EAN13)",
            "status": status.PUBLISHED,
            "imported_t": dataEHora,
            "url": "https://world.openfoodfacts.org/product/" + res.data.product.code,
            "product_name": res.data.product.product_name,
            "quantity": res.data.product.quantity,
            "categories": res.data.product.categories,
            "packaging": res.data.product.packaging,
            "brands": res.data.product.brands,
            "image_url": res.data.product.image_url
          }];

      }

      console.log("JSON completo: " + JSON.stringify(produtosProntosJSON[0], null, 2));


      for (inc = 0; inc < 21; inc++) {
        
        var input = produtosProntosJSON[inc];

        data = [
          { input }, //dados inseridos com chaves devido a alguns caracteres invalidos
        ]
        var insert = 1;
        Produto.collection.insertMany(data, function (err, r) {
          assert.strictEqual(null, err);
          assert.equal(1, r.insertedCount);
          console.log("Quantidade de inserts (banco2): " + insert);
          insert++;


        })
      }

    }
    baixaJSON();
    
  },

} 