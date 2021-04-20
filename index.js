//*create server*//
const express = require('express')
const app = express()
//*libary*//
const bodyParser = require("body-parser");
const cors = require('cors');
//* server *//
const port = 4000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const user = {
  email: '',
  name: '',
  password: ''
}

app.post('/register', (req, res) => {
  user.email = req.body.email
  user.name = req.body.name
  user.password = req.body.password
  res.send({ registered: user });
})

app.put('/login', (req, res) => {
  const verifyUser = {
    email: '',
    password: ''
  }
  verifyUser.email = req.body.email
  verifyUser.password = req.body.password

  if (verifyUser.email === user.email && verifyUser.password == user.password) {
    res.send({ logged: verifyUser })
  }
  else {
    res.status(404).send({ error: 'Invalid credentials' })
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})