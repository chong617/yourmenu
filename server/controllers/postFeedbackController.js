const { json } = require('body-parser')
const express = require('express')

var router = express.Router()
var ObjectID = require('mongoose').Types.ObjectID

var {PostFeedback} = require('./models/postFeedback')

router.get('/',(req,res) => {
      PostFeedback.find((err,docs)=>{
       if(!err) res.send(docs)
       else console.log('Error while retrieving all records : ' + JSON.stringify(err,undefined,2))
      })
})

router.post('/',(req,res)=> {
    var newFeedback = new PostFeedback({
        lastname:req.body.lastname,
        firstname:req.body.firstname,
        telnum:req.body.telnum,
        email:req.body.email,
        agree:req.body.agree,
        contactType:req.body.contactType,
        message:req.body.message
    })
    newFeedback.save((err,docs)=> {
        if(!err) res.send(docs)
           else console.log('Error while creating new records : ' + JSON.stringify(err,undefined,2))
    })
})


router.put('/:id',(req,res)=> {
    
if(!ObjectID.isValid(req.params.id))
   return res.status(400).send('No record with given id :' + req.params.id)

   var updateFeedback = {
    lastname:req.body.lastname,
    firstname:req.body.firstname,
    telnum:req.body.telnum,
    email:req.body.email,
    agree:req.body.agree,
    contactType:req.body.contactType,
    message:req.body.message
}
  PostFeedback.findByIdAndUpdate(req.params.id, {$set: updateFeedback},(err,docs)=> {
      if(!err) res.send(docs)
      else console.log('Error while updating a record: ' + JSON.stringify(err,undefined,2))
  })
})

router.delete('/:id',(req,res)=> {
    
if(!ObjectID.isValid(req.params.id))
    
   return res.status(400).send('No record with given id:' + req.params.id)

   PostFeedback.findByIdAndRemove(req.params.id,(err,docs)=> {
    if(!err) res.send(docs)
    else console.log('Error while deleting a record: ' + JSON.stringify(err,undefined,2))
   })
})

module.exports = router