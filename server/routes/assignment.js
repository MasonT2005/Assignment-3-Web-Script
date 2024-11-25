var express = require('express');
var router = express.Router();
let mongoose = require('mongoose')
// telling router that i have this model
let Assignment = require('../model/assignment.js');
const assignment = require('../model/assignment.js');
let assignmentController = require('../controllers/assignment.js')
/* get route for the incident list - Read Operation */



router.get('/',async(req,res,next)=>{
try{
    const AssignmentList = await Incident.find();
    res.render('Assignment/list',{
        title:'Assignment',
        AssignmentList:AssignmentList
    })}
    catch(err){
        console.error(err);
        res.render('Assignment/list',{
            error:'Error on server'
        })
    }s
    });

/* Create Operation --> get route for displaying the add page */
router.get('/add',async(req,res,next)=>{
    try{
        res.render('Assignment/add',{
            title: "Add Assignment"
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Assignment/list',{
            error:'Error on server'
        })
    }
});
/* Create Operation --> post route for processing the add page */
router.post('/add',async(req,res,next)=>{
    try{
        let newAssignment = Assignment({
            "Name":req.body.Name,
            "Time":req.body.Time,
        })
        Assignment.create(newAssignment).then(()=>{
            res.redirect('/assignmentslist');
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Assignment/list',{
            error:'Error on server'
        })
    }
});

/* Update Operation --> get route for displaying the edit page */
router.get('/edit/:id',async(req,res,next)=>{
    try{
        const id = req.params.id;
        const assignmentToEdit = await Assignment.findById(id);
        res.render('Assignment/edit',
            {
                title:'Edit Assignment',
                Assignment:assignmentToEdit
            }
        )
    }
    catch(err)
    {
        console.error(err);
        next(err); // keep passing the error
    }
});
/* Update Operation --> post route for processing the edit page */
router.post('/edit/:id',async(req,res,next)=>{
    try{
        let id=req.params.id;
        let updatedAssignment = Assignment({
            "_id":id,
            "Name":req.body.Name,
            "Time":req.body.Time,
        });
        Assignment.findByIdAndUpdate(id,updatedAssignment).then(()=>{
            res.redirect('/assignmentslist')
        })
    }
    catch(err){
        console.error(err);
        res.render('Assignment/list',{
            error:'Error on server'
    })
}
});

/* Delete Operation --> get route to perform delete operation */
router.get('/delete/:id',async(req,res,next)=>{
    try{
        let id=req.params.id;
        Assignment.deleteOne({_id:id}).then(()=>{
            res.redirect('/assignmentslist')
        })
    }
    catch(err){
        console.error(err);
        res.render('Assignment/list',{
            error:'Error on server'
    })
    }
});

    module.exports = router