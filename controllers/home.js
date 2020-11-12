/* Endpoint 1: Responsável por retornar status 200 
   e o título do desafio
*/

module.exports = app => {
    app.get('/', function (req, res) {
        //set the appropriate HTTP header
        res.setHeader('Content-Type', 'text/html');

        res.status(200).send('FullStack Challenge 20201030');
        
        res.end();
      });
}