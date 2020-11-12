const data = require('./openFoodFactsDbs');
const analisaTempo = require('./ficheiroMaisRecente');
const downFicheiro = require('./downloadEUnzipDoFicheiro');
const fs = require('fs');
const separaProduto = require('../api-rest-food/pegaCodigoDoProduto');

var ficheiros = ''; //conjunto de listas dos produtos
var ficheirosOrganizados = {}; // listas organizadas
var maisRecente = 0;

async function devolveFicheiro() {

    var date = new Date();
    var current_hour = date.getHours();
    var current_minutes = date.getMinutes();
    var current_seconds = date.getSeconds();
    var horaCerta = (current_hour == 12) && (current_minutes == 13) && (current_seconds = 0);
  
    //Verifica se o ficheiro já foi baixado
    //Atualização do ficheiro todo dia as 2 da manhã
    if ((!fs.existsSync('./descompresso.json')) || (horaCerta)) {
        //ficheiro = await data;
        ficheiros = await data;
        ficheirosOrganizados = ficheiros.split('\n');
        let tamanhoFicheiros = ficheirosOrganizados.length - 1;
        for (ficheiro in ficheirosOrganizados) {
            if (ficheiro < tamanhoFicheiros) { //evitando null/undefined  
                maisRecente = analisaTempo.verificaTempoDeModificacao(ficheirosOrganizados[ficheiro],
                    tamanhoFicheiros);

            }
        }


        await downFicheiro.downloadEUnzip(maisRecente);

        console.log('Mais recente: ' + maisRecente);

        return ficheiro;
    } else {
        console.log("Arquivo já baixado!");
        (async () => {
            console.log("Conteúdo de um ficheiro: " + await separaProduto.produto("./descompresso.json"));

        })()
    }


}

ficheiro = devolveFicheiro();
module.exports = ficheiro;







