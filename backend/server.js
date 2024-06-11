const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjectId = require('mongoose').Types.ObjectId;
const { PORT } = require('./config/properties');
const connectLocalDB = require('./config/mongoDBLocal');
const app = express();
connectLocalDB(); // Conexion con la base de datos

const db = mongoose.connect("mongodb+srv://admin:admin@mensajeria.psslkdx.mongodb.net/")




app.use(cors());

app.use(express.json()); // parse application/json

app.use(express.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

// Rutas
app.use('/login', require('./routes/login.routes'));
app.use('/participante', require('./controllers/participante'));
app.use('/usuarios', require('./controllers/users'));



// Servidor
app.listen(PORT, () => console.log(`Escuchando por el puerto ${PORT}`) );







// const Cat = mongoose.model('Cat', { name: String });
// // `UserModel` is a "Model", a subclass of `mongoose.Model`.
// const Participante = mongoose.model('Participante',
//     { 
//         nombre: String,
//         eventoId:String,
//         dependencia:String,
//         correo: String,
//         status:Number
//     });
    
// async function asyncCall() {    
//     const res = await Participante.find({});
//     console.log("in")
//     return res
//   }

//   router.get('/Participante',  (req,res) => {
    
//     usuarios.find((err,doc) => {
//         if(!err) {res.send(doc)}
//         else {console.log('Error recibiendo recetas' + JSON.stringify(err, undefined, 2));}
//     });
// })
    // app.get("/Participante", (req,res) =>{
    //         return res.send(asyncCall())
    // })
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
// You can use a Model to create new documents using `new`:
// const userDoc = new UserModel({ name: 'Foo' });
// await userDoc.save();

// You also use a model to create queries:
// const userFromDb = await UserModel.findOne({ name: 'Foo' });

