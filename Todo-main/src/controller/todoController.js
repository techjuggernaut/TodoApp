const Todo = require("../model/todo")




// add todo task (create todo)

exports.createTodo = async (req, res) => {
  try {
   let todo = await req.body
   let created = await Todo.create(todo)
   if (!created) return res.status(404).json({
     success:false,
     message: "Todo not created"
   })
   res.status(201).json({
     success: true,
     message: 'Todo created',
     todo: created
   }); console.log(created)
  } catch (error){
   res.status(500).json({
     success: false,
     message: 'internal server error',
     error: error.message
   })
  }
 }






// retrieve all todo(get all todo)

exports.getAllTodos = async (req, res) => {
  try{
    let {page, limit} = req.query;
    if (!page) page =1
    if (!limit) limit= 10
    const skip = (page-1) * 10;
    let todos = await Todo.find().skip(skip).limit(limit);
    if(todos.length === 0) 
    return  res.status(404).json({
      success: false,
      message: 'No Todo found'
    })
    res.status(200).json({
      success: true,
      message:"All Todos",
      todos,
      count: todos.length
    })
  } catch(error){
    res.status(500).json({
      success: false,
      message:'internal server error',
      error: error.message
    })
  }
}





//update a particular todo 

exports.updateTodo = async (req, res) => {
  try{
    let id = { _id: req.params.id}
    let todo= await req.body
    let updated = await Todo.findOneAndUpdate(id, todo, {new: true});
    if(!updated) return res.status(404).json({
      success: false,
      message: 'Todo is not updated'
    })
    res.status(200).json({
      success: true,
      message: 'Todo info Updated',
      todo: updated
    })
  }
  catch(error){
    res.status(500).json({
      success: false,
      message: 'internal server error',
      error: error.message
    })
  }
}


//delete todo

exports.deleteTodo = async (req, res) => {
  try{
    let id = { _id: req.params.id}
    let deleted = await Todo.findByIdAndRemove(id)
    if(!deleted) return res.status(400).json({
      success:false,
      message: 'Todo not deleted'
    }) 
    res.status(200).json({
      success: true,
      message: 'Todo deleted'
    })
  }
  catch(error){
    res.status(500).json({
      success:false,
      message: 'internal server error',
      error: error.message
    })
  }
}