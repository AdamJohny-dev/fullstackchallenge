const customExpress = require('./config/customExpress');
//const ficheiro = require ('./open-food-facts-storage/trataFicheiroDeProdutos');
//const lista = require('./controllers/listaDeProdutos');
//const atualiza = require('./api-rest-food/pegaCodigoDoProduto');
//const downloadFicheiro = require('./open-food-facts-storage/openFoodFactsDbs')



const app = customExpress();

app.listen(5000, () => {
    console.log('Servidor ativo!');
    
});

var date = new Date();
var current_hour = date.getHours();
console.log('Informando a hora: ' + current_hour);
//atualiza.armazenaLista();











