const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const database = {
    users: [
        {
            id: '01',
            name: 'Jeerapat',
            email: 'jeeraphat.wi@gmail.com',
            password: 'Tawan_101010',
            repo: 0,
            joined: new Date()
        }
    ]
}

app.get('/', (req, res)=> {
    res.send('this is working')
})

app.post('/signin', (req, res)=> { 
    if(req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password) {
            res.json('success')
        } else {
            res.status(400).json('error logging in')
        }
})

app.listen(3000, () => {
    console.log('app is running on port 3000')
})