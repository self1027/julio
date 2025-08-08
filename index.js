const express = require('express')
const tasks = require('./tasks/tasksModel')

const tasksRoutes = require('./tasks/tasksRoutes')

const app = express()

app.use(express.json())

app.use(tasksRoutes)

tasks.sync()

app.listen(3000, ()=>{
    console.log('server on http://localhost:3000')
})