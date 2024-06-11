const { Router } = require('express');
const router = Router();
let users  = require('../models/users');
const bcryptjs = require('bcryptjs');
router.post('/', async (req, res) => {
    console.log("🚀 ~ router.post ~ req:", req.body)
    const newParticipante = new users ({
        userName:req.body.userName,
        nombre:req.body.nombre,
        password:bcryptjs.hashSync(req.body.password, 10),
        dependencia:req.body.dependencia,
        correo:req.body.correo,
        staus:1
    });
    const result = await newParticipante.save();
    if(result){
        res.json({res: 'El usuario se guardo.'})
    }else{
        res.json({err: 'El usuario no se pudo guardar.'})
    }
});

router.put('/:id', async (req, res) => {
    let body = req.body
    if(req.body.password == '' || req.body.password == null){
        body =  {
            _id: req.body._id,
            userName: req.body.userName,
            nombre: req.body.nombre,
            correo: req.body.correo,
            dependencia: req.body.dependencia,
            status: req.body.status
        }
    }else{
        body =  {
            _id: req.body._id,
            userName: req.body.userName,
            nombre: req.body.nombre,
            correo: req.body.correo,
            password:bcryptjs.hashSync(req.body.password, 10),
            dependencia: req.body.dependencia,
            status: req.body.status
        } 

        }
      
    const result = await users.findByIdAndUpdate(req.params.id, body)
    if(result){
        res.json({res: 'El usuario se actualizo.'})
    }else{
        res.json({err: 'El usuario no fue actualizado'})
    }
})

router.delete('/:_id', async  (req, res) => {
    const result = await users.findByIdAndDelete(req.params._id)
    if(result){
        res.json({res: 'El usuario fue Eliminado'})
    }else{
        res.json({err: 'El usuario no fue eliminado'})
    }
});


router.get('/:_id', async  (req, res) => {
    const result = await users.findById(req.params._id)
    if(result){
        res.json({res: result})
    }else{
        res.json({err: 'El usuario no fue eliminado'})
    }
});

router.get('/', async (req,res) => {
    const result = await users.find();
    if(result){
        res.json({res: result})
    }else{
        res.json({err: 'No se pudo cargar informacion de Participantes'})
    }
});

module.exports = router;