const db = require('../database/connection');
var listaDeProdutosProntos = require("../api-rest-food/pegaListaDeProdutos");
var decisao = 1;

var codigoParaPut = '';
var produto = [];

if(decisao == 1) { //futuro button no frontend
        module.exports = app =>  {


            console.log("Aqui foi!");
        
          db.on('error', console.error.bind(console, 'connection error:'));
          db.once('open', function () {
            console.log("Connection Successful!");
            var query = listaDeProdutosProntos.getListaDeProdutos().find({}, {});
            var inc = 0; //direciona o produto para sua posicao no vetor
            function atualizaLista() {
              query.exec(function (err, codigosProdutos) {
                if (err)
                  return console.log(err);
                codigosProdutos.forEach(function (codigoProduto) {
                 
                  codigoParaPut = JSON.stringify(codigoProduto).split("[").join("").split("]").join("");
                  console.log("Numero de vezes: " + inc);
                 
                  
                  produto[inc] = JSON.parse(codigoParaPut).input;
                  inc++;
                });
                
        
              });
        
            }
            atualizaLista();
          })
        
          app.get('/products/', (req, res, next) => {
            console.log("Retornou o produto especifico!");
            res.send(produto);
          })
          
        
        
        }

    }




