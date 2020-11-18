const db = require('../database/connection');
var listaDeProdutosProntos = require("../api-rest-food/pegaListaDeProdutos");
var decisao = 2; //serve para simular um button no frontend

var codigoParaPut = '';
var produto = [];

if(decisao == 2) { //futuro button no frontend
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
                 
                  codigoParaPut = JSON.stringify(codigoProduto,null,2).split("[").join("").split("]").join("");
                  console.log("Numero de vezes: " + inc);
                 
                  
                  produto[inc] = JSON.parse(codigoParaPut).input.product_name; //caminha entre os keys do json
                  //produto[inc] = JSON.parse(codigoParaPut).input;
                  inc++;
                });
                
        
              });
        
            }
            atualizaLista();
          })
          
          //certo seria app.put conforme especificações de projeto
          app.get('/products/code', (req, res, next) => {
            console.log("Retornou o produto especifico!");
            //res.send(JSON.stringify(produto).split("}").join(""));
            // res.send(JSON.stringify(produto).split("}",1).join("").split("[").join("").split("]").join("")
            //     .split(",")[20]); //localiza nome do produto (pesquisaProduto)
            res.send(JSON.stringify(produto).split("}",1).join("").split("[").join("").split("]").join("")
                .split(",")); //localiza nome do produto (pesquisaProduto)
            
          })
          
        
        
        }

    }




