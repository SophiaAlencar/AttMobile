const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Item = new Schema({
  nome: {
    type: String
  },
  marca: {
    type: String
  },
  preço: {
    type: Number
  },
  quantidade: {
    type: Number
  }
},{
    collection: 'item'
});

module.exports = mongoose.model('Item', Item);