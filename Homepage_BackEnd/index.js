require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')

const Project =require('./models/project')
var morgan = require('morgan')


app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms '))
app.use(cors())
app.use(express.static('dist'))



app.get('/api/projects', (req, res) => {

    Project.find({}).then( projects => {
        res.json(projects)
      })


  })

  app.post('/api/projects', (req, res, next) => {

    const new_project = { ...req.body }
  
  
    const project = new Project({
      ProjectCategory: new_project.ProjectCategory,
      name: new_project.name,
      company: new_project.company,
      year: new_project.year,
      role: new_project.role,
      description: new_project.description,
      images: new_project.images,
      main_img: new_project.main_img

    })
    project.save().then(savedProject => {
      res.json(savedProject)
    })
      .catch(error => next(error))
  
  
  })


  const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    }
    else if (error.name ==='ValidationError') {
      return response.status(400).json({ error: error.message })
    }
  
    next(error)
  }
  app.use(errorHandler)
  



const PORT = process.env.PORT || 3004
console.log(PORT)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
