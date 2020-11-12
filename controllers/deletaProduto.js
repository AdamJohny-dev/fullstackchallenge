module.exports = app => {
    
    app.delete('/products/:code',(req,res) => {
        console.log(req.body)
        res.send('Produto deletado com sucesso!');
    })
}