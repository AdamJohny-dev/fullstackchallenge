

module.exports = app => {
    app.get('/products/code', (req,res) => res.send('Obtém a info de um produto da base de dados'));
}