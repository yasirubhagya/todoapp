const express =require('express');
const router =express.Router();
const todoModel = require('./todoModel');
//localhost:300/api/listtodo/
router.get('/listtodo',(req,res)=>{
   
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

//localhost:300/api/addtodo/
router.post('/addtodo',(req,res)=>{
    let newtodo = new todoModel({
        name:req.body.name,
        type:req.body.type,
        ver:req.body.ver
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

//localhost:300/api/edittodo/
router.put('/edittodo',(req,res)=>{
  
    res.json("edit todo");
})

//localhost:300/api/deletettodo/
router.delete('/deletetodo/:Id',(req,res)=>{
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