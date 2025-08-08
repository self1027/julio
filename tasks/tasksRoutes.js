const express = require('express')
const sequelize = require('sequelize')
const tasksModel = require('./tasksModel')

const router = express.Router()

router.get('/tasks', async (req, res) => {
    const tasks = await tasksModel.findAll()

    return res.send(tasks)
})

router.post('/tasks', async (req, res) => {
    const body = req.body.body

    if (!body) return res.status(400).send('Body não fornecido');

    await tasksModel.create({
        body
    }).then(() =>{
        return res.status(200).send('Tarefa criada com sucesso');
    })

})

router.put('/tasks/:id', async (req, res) => {
    const id = req.params.id
    const newBody = req.body.body

    if (!newBody || !id) return res.status(400).send('Forneça ambos os parametros');

    const task = await tasksModel.findByPk(id)

    if(!task) return res.status(404).send('Task não encontrada');

    if (task) {
        task.body = newBody;
        await task.save().then(() =>{
            return res.status(200).send('Tarefa editada com sucesso');
        })
    }

})

router.delete('/tasks/:id', async (req, res) => {
    const id = req.params.id

    if (!id) return res.status(400).send('Body não fornecido');
    
    await tasksModel.destroy({
      where: {
        id
      },
    }).then(() =>{
        return res.status(200).send('Tarefa deletada com sucesso');
    })

})

module.exports = router