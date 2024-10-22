const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/users', (req,res) => {
    res.send("hello qvend")
})

app.post('/users',(req, res) => {
    console.log(req.body)
    res.send('hello qvend 2')
})

app.post('/users/:userId', (req, res) => {
    console.log(req.body)
    console.log(req.params)
    console.log(req.query)
    res.send('hello qvend 2')
})


app.listen(3000,()=>{
    console.log('server is running on port 3000')
})