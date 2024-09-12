const express = require('express')
const app = express();


app.get('/', function(req,res){
    res.send('Teste se server')
})

app.listen(3000, ()=>console.log('API rodando'))
