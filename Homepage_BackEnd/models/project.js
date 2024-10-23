const mongoose = require('mongoose')
mongoose.set('strictQuery', false)


const url = process.env.MONGODB_URI

console.log('connecting to', url)
mongoose.connect(url)

  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })


const projectSchema = new mongoose.Schema({
  ProjectCategory: [{
    type: String,
  }],

  name: {
    type: String,

  },

  company: {
    type: String,

  },

  role: {
    type: String,

  },

  year: {
    type: String,

  },

  description: {
    type: String,
 
  },

  images: [{
    type: String,
  }],

  main_img: {
    type: String,

  }

})

projectSchema.path('ProjectCategory').required(true)
projectSchema.path('name').required(true)
projectSchema.path('role').required(true)
projectSchema.path('year').required(true)
projectSchema.path('description').required(true)
projectSchema.path('images').required(true)
projectSchema.path('main_img').required(true)




projectSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


module.exports = mongoose.model('Project', projectSchema)