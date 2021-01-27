const fs = require('fs')
const express = require('express')
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json());

app.get("/", (req, res) => {
  let files = fs.readFile('file.json', 'utf8' (error, data)=>{
    if(error) throw error
    let result = data.JSON.stringify()
    res.write(result)
    res.end()
  })
});

app.post("/", (req, res) => {
  let files = fs.readFile('file.json', 'utf8', (error, data)=>{
    if(error) throw error
    for(let a in data){
      for(let i in req.body){
        if(a==i)data[a] = req.body[i]
      }
    }
    fs.writeFile('file.json', data, ()=>{
      console.log('Data saved')
      res.end()
    })
  })
});

app.listen(3000)
