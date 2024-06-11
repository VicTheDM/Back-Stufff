const { Schema, model } = require('mongoose');


let participanteSchema = new Schema({
        nombre: {
            type: String,
            unique: false,
            trim: true,
            required: true
        },
        eventoId: {
            type:String,
            required: true,
            default:''
        },
        dependencia: {
            type:String,
            required: false,
            default:''
        },
        correo:{
            type:String,
            required: false,
            default:''
        },
        status:{
            type:Number,
            default:1
        }
});

module.exports = model('participante', participanteSchema);