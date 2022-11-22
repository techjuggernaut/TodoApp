const router = require('express').Router()

const controller = require('../controller/todoController')

router
.get("/", controller.getAllTodos)
.post("/", controller.createTodo)
.put("/:id", controller.updateTodo)
.delete("/:id", controller.deleteTodo)


module.exports = router