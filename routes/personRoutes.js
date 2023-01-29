const router = require('express').Router()
const Person = require('../models/Person')

//Routes Person
router.post('/', async(req, res) => {
  try {
    const {name, salary, approved} = req.body
  const person = {
    name,
    salary,
    approved
  }

  if(!name){
    res.status(422).json({error:"Propriedade nome é obrigatório"})
    return;
  }
  if(!salary){
    res.status(422).json({error:"Propriedade salário é obrigatório"})
    return;
  }
  if(!approved){
    res.status(422).json({error:"Propriedade aprovado é obrigatório"})
    return;
  }

  //Criando dados
  await Person.create(person)
  res.status(201).json({message: "User included success!"})

  } catch (error) {
    res.status(500).json({error: error})
  }
})

router.get('/', async(req, res) => {
  try {
      const people = await Person.find()

      res.status(200).json(people)
  } catch (error) {
    res.status(500).json({error: error})
  }
})

router.get('/:id', async(req, res) => {
  try {
      const id = req.params.id
      const people = await Person.findOne({_id: id})

      if(!people){
        res.status(424).json({message: "User not found!"})
        return
      }

      res.status(200).json(people)
  } catch (error) {
    res.status(500).json({error: error})
  }
})

router.patch('/:id', async(req, res) => {
  try {
      const id = req.params.id
      const {name, salary, approved} = req.body
      const person = {
        name,
        salary,
        approved
      }
      
      const updatedPerson = await Person.updateOne({_id: id}, person);

      
      if(updatedPerson.matchedCount == 0){
        res.status(424).json({message: "User not found!"})
        return
      }

      res.status(200).json(person)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

router.delete('/:id', async(req, res) => {
  try {
      const id = req.params.id
      const person = await Person.findOne({_id: id})

      if(!person){
        res.status(424).json({message: "User not found!"})
        return
      }

      await Person.deleteOne({_id: id});

      res.status(200).json({message: "User excluded success!"})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

module.exports = router;