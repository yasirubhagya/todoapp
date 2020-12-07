const express =require('express');
const router =express.Router();
const todoModel = require('./todoModel');

// GET localhost:300/api/todos/
router.get('/todos',(req,res)=>{

    todoModel.find()
    .exec()
    .then(result=>{
        res.status(200).json(result);
    })
    .catch(err=>{
        res.status(500).json({
            msg:"err"
        })
    })
})

// GET localhost:300/api/todos/:id
router.get('/todos/:id',(req,res)=>{
    const id = req.params.id;
    todoModel.findById(id)
    .exec()
    .then(result=>{
        res.status(200).json(result);
    })
    .catch(err=>{
        res.status(500).json({
            msg:"err"
        })
    })
})

// POST localhost:300/api/todos/
router.post('/todos',(req,res)=>{
    let newtodo = new todoModel({
        name: req.body.name,
        type: req.body.type,
        completed: req.body.completed
    });
    newtodo.save()
    .then(result=>{
        res.status(200).json({
            msg:"success"
        })
    })
    .catch(err=>{
        res.status(500).json({
            msg:"err"
        })
    })
})

// PUT localhost:300/api/todos/:id
router.put('/todos',(req,res)=>{
    res.json("edit todo");
})

// DELETE localhost:300/api/todos/:id
router.delete('/todos/:Id',(req,res)=>{
    todoModel.findByIdAndRemove(req.params.Id)
    .exec()
    .then(result=>{
        res.status(200).json({
            msg:"success"
        })
    })
    .catch(err=>{
        res.status(500).json({
            msg:"err"
        })
    })
})

module.exports = router;
