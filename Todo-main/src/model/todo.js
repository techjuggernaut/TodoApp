const { Schema, model } = require ('mongoose')

const todoSchema = new Schema ({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
},
 {timestamps: true}
) ;

const todoModel = model ("todos", todoSchema);

module.exports =todoModel