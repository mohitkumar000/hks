const express= require('express');
const {createTodo, updateTodo} = require('./types');
const app = express()
const port = 8000


app.use(express.json());
app.post('/todo', (req, res) => {
    const createPayload= req.body;
    const parsePayload=createTodo.safeParse(createPayload)

    if(!parsePayload.success){
        res.status(411).json({
            msg:"you have sent a wrong inputs",
        })
        return;
    }
 
})
app.get('/todos', (req, res) => {
    res.send('Hello World!')
  })
  
  app.put("/todos", (req, res) => {
    const updatePayload= req.body;
    const updatepayload=updateTodo.safeParse(updatePayload)
    if(!updatepayload.success){
        res.status(411).json({
            msg:"you have sent a wrong inputs",
        })
        return;
    }
    todo.create({
        title:createPayload.title,
        description:createPayload.description
    })

    res.json({
        msg:"todo created"
    })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
