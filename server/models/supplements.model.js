import mongoose from 'mongoose'
//const mongoose = require('mongoose');
const SupplementsSchema = new mongoose.Schema({
name: {
type: String,
trim: true,
required: 'Name is required'
},
description: {
    type: String,
    trim: true,
    required: 'Name is required'
    },
price: {  // Ajout du champ "price"
    type: Number,
    required: 'Price is required'
    },
quantity: {  // Ajout du champ "quantity"
type: Number,
required: 'Quantity is required'
},
created: {
type: Date,
default: Date.now
},
updated: {
type: Date,
default: Date.now
}

});
export default mongoose.model('Supplements', SupplementsSchema);
