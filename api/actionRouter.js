//router for actions
const express = require ('express');
const Actions = require('../data/helpers/actionModel')

const router = express.Router();
router.use(express.json());

//routes for actions
router.get('/', (req,res)=>{
    //get all actions
    Actions.get()
    .then(actions=>{
        res.status(200).json(actions)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error:"unable to get actions"})
    })
})
router.get('/:id', (req,res)=>{
    //get action by id
    const {id} = req.params
    Actions.get(id)
    .then(action=>{
        res.status(200).json(action)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error:"Action with that ID does not exist"})
    })
})

router.post('/', (req, res) => {
    //add new action
    const newAction = req.body;
      Actions.insert(newAction)
        .then(adding=>{
            res.status(201).json(adding)
          })
       .catch(err=>{
         console.log(err)
        res.status(500).json({message: 'Cannot add action'})
       })
  
  });

  router.delete('/:id', (req, res) => {
    //delete action
    const {id}=req.params;
      Actions.remove(id)
        .then(deleteAction=>{
            res.status(201).json(deleteAction)
          })
       .catch(err=>{
         console.log(err)
        res.status(500).json({message: 'Cannot delete action'})
       })
  
  });

  router.put('/:id', (req, res) => {
    //edit action
    const{id}=req.params
    const editAction = req.body;
      Actions.update(id, editAction)
        .then(editingAction=>{
            res.status(201).json(editingAction)
          })
       .catch(err=>{
         console.log(err)
        res.status(500).json({message: 'Cannot edit action'})
       })
  
  });


module.exports=router;