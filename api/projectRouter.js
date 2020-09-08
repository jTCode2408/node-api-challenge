const express = require ('express');
const Projects = require('../data/helpers/projectModel');

const router = express.Router();
router.use(express.json());

//routes for PJ's
router.get('/', (req,res)=>{
    //get all projects
    Projects.get()
    .then(projects=>{
        res.status(200).json(projects)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error:"unable to retrieve projects"})
    })
})
router.get('/:id', (req,res)=>{
    //get project by id
    const {id} = req.params
    Projects.get(id)
    .then(project=>{
        res.status(200).json(project)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error:"Project with specified ID does not exist"})
    })
})

router.post('/', (req, res) => {
    //add new projects
    const newProject = req.body;
      Projects.insert(newProject)
        .then(pj=>{
            res.status(201).json(pj)
          })
       .catch(err=>{
         console.log(err)
        res.status(500).json({message: 'Cannot add roject'})
       })
  
  });

  router.delete('/:id', (req, res) => {
    //delete project
    const {id}=req.params;
      Projects.remove(id)
        .then(deleting=>{
            res.status(201).json(deleting)
          })
       .catch(err=>{
         console.log(err)
        res.status(500).json({message: 'Cannot delete proejct'})
       })
  
  });

  router.put('/:id', (req, res) => {
    //edit project
    const{id}=req.params
    const editProject = req.body;
      Projects.update(id, editProject)
        .then(editing=>{
            res.status(201).json(editing)
          })
       .catch(err=>{
         console.log(err)
        res.status(500).json({message: 'Cannot edit project'})
       })
  
  });

  router.get('/:id/actions', (req, res) => {
    //get project actions
    const {id} = req.params;
      Projects.getProjectActions(id)
        .then(pjAction=>{
            res.status(201).json(pjAction)
          })
       .catch(err=>{
         console.log(err)
        res.status(500).json({message: 'Cannot find actions for project'})
       })
  
  });


module.exports=router;