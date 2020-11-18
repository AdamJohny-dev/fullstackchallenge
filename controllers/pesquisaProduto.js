

module.exports = app => {
    app.get('/products/code', (req,res) => res.send('Obtém a info de um produto da base de dados'));
    // res.send(JSON.stringify(produto).split("}",1).join("").split("[").join("").split("]").join("")
            //     .split(",")[20]); //localiza nome do produto (pesquisaProduto)
}