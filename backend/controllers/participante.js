const { Router } = require('express');
const router = Router();
let participantes  = require('../models/participante');

router.post('/', async (req, res) => {
    const newParticipante = new participantes ({
        nombre:req.body.nombre,
        eventoId:req.body.eventoId,
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
    const result = await participantes.findByIdAndUpdate(req.params._id)
    if(result){
        res.json({res: 'El usuario se guardo.'})
    }else{
        res.json({err: 'El usuario no fue eliminado'})
    }
})

router.delete('/:_id', async  (req, res) => {
    const result = await participantes.findByIdAndDelete(req.params._id)
    if(result){
        res.json({res: 'El usuario fue Eliminado'})
    }else{
        res.json({err: 'El usuario no fue eliminado'})
    }
});


router.get('/:_id', async  (req, res) => {
    const result = await participantes.findById(req.params._id)
    if(result){
        res.json({res: result})
    }else{
        res.json({err: 'El usuario no fue eliminado'})
    }
});

router.get('/', async (req,res) => {
    const result = await participantes.find();
    if(result){
        res.json({res: result})
    }else{
        res.json({err: 'No se pudo cargar informacion de Participantes'})
    }
});

module.exports = router;