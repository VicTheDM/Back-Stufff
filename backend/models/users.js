const { Schema, model } = require('mongoose');


let usuariosSchema = new Schema({
        userName: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type:String,
            required: true
        },
        correo: {
            type:String,
            required: true,
            default:''
        },
        dependencia: {
            type:String,
            required: true,
            default:''
        },
        nombre: {
            type:String,
            required: true,
            default:''
        },
        status: {
            type:Number,
            required: true,
            default: 1
        }
});

module.exports = model('usuario', usuariosSchema);