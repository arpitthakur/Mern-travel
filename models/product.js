const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
    
  },
  startDate: {
    type: String,
    required:true
    
  },
  endDate: {
    type: String,
    required:true

  },

  email: {
    type: String,
    required:true
    
  },
  phone:{
    type:String,
    required:true
  },
  event:{
    type:String,
    required:true
  }


});

module.exports = mongoose.model('Product', ProductSchema);