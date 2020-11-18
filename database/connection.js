var mongoose = require('mongoose');  

var client = '';
const url = 'mongodb+srv://dbProductsInfo:dbProductsInfo@cluster0.iv0e4.mongodb.net/test?retryWrites=true&w=majority';
try {
  client = mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true});
  } catch (error) {
    handleError(error);
  } finally{
      console.log("Conectado com sucesso!");
  }
var db = mongoose.connection;

//const uri = "mongodb+srv://dbProductsInfo:dbProductsInfo@cluster0.iv0e4.mongodb.net/test?retryWrites=true&w=majority";


module.exports = db;
