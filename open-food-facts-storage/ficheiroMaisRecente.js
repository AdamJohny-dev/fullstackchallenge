

var maisRecente = 0; 
var  inc = 1;

module.exports = {

    verificaTempoDeModificacao: (ficheiro,tamanho) => {
        let separaUnixStamp = ficheiro.split('_')[2];
        let unixStampFinalRecente = separaUnixStamp.split('.',1);
        let date = new Date(unixStampFinalRecente*1000);

        if(maisRecente < unixStampFinalRecente) {
            maisRecente = ficheiro; //guarda o ficheiro de produtos mais atual
        }
        console.log('Última alteração: ' + date);

        if(tamanho == inc) {
            return maisRecente; //envia para tratamento do ficheiro mais recente
        }
        inc++;
      },

} 