const express = require ('express')
const connect = require ('./config/database')
const todoRoute = require ('./router/todoRoute')
const {json} = require ('express')
connect()


const app = express()
app.use(json())
app.use('/todo', todoRoute)
const PORT = process.env.PORT || 3000 ;

app.get ('/', (req, res) =>{
  res.send('Todo Task');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});
