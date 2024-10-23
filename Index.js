const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


const users = [
    {id: 1, name: "John Doe", email: "john.doe@example.com", password: "password123"},
    {id: 2, name: "Jane Smith", email: "jane.smith@example.com", password: "password234"},
    {id: 3, name: "Alice Johnson", email: "alice.johnson@example.com", password: "password345"},
    {id: 4, name: "Bob Brown", email: "bob.brown@example.com", password: "password456"},
    {id: 5, name: "Charlie Black", email: "charlie.black@example.com", password: "password567"},
    {id: 6, name: "Diana White", email: "diana.white@example.com", password: "password678"},
    {id: 7, name: "Ethan Green", email: "ethan.green@example.com", password: "password789"},
    {id: 8, name: "Fiona Blue", email: "fiona.blue@example.com", password: "password890"},
    {id: 9, name: "George Red", email: "george.red@example.com", password: "password901"},
    {id: 10,name: "Hannah Yellow", email: "hannah.yellow@example.com", password: "password012"}
]

app.get('/users', (req,res) => {
   try{
       res.send(users)
   }catch (e){
       res.status(500).send(e.message)
   }
})

app.post('/users',(req, res) => {
   try{
       const {name, email, password} = req.body
       const id = users[users.length - 1].id + 1
       const newUser = {id, name, email, password}
       users.push(newUser)
       res.status(201).send(newUser)
   }catch(e){
       res.status(500).send(e.message)
   }
})

app.get('/users/:userId', (req, res) => {
    try{
        const userId = Number(req.params.userId)
        const user = users.find(user => user.id === userId)
        if(!user){
            res.status(404).send('user was not found')
        }
        res.send(user)
    }catch (e){
        res.status(500).send(e.message)
    }
})

app.delete('/users/:userId', (req,res) => {
    try{
        const userId = Number(req.params.userId)
        const userIndex = users.findIndex(user => user.id === userId)
        if(userIndex === -1){
            return res.status(404).send('not found')
        }
        users.splice(userIndex, 1)
        res.sendStatus(204)
    }catch(e){
        res.status(500).send(e.message)
    }
})


app.listen(3000,()=>{
    console.log('server is running on port 3000')
})