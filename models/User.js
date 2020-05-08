const mongoose = require('mongoose');
const Schema = mongoose.Schema;   // the same as const { Schema } = mongoose;

// create a scheam for this collection, what each record looks like
const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);   // collection name, schema name