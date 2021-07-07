const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    email_usuario: String,
    adress_usuario: String,
    date_usuario: String,
    service_usuario: {
        type: Number, default: 1
    }
},{
    timestamps: true
})

const Users = mongoose.model('Users', DataSchema)

module.exports = Users;