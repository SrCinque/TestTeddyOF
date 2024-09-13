import express from 'express';
import { db } from './configDB.js'
const app = express();




app.use(express.json());
db();


app.post('/list', (req,res)=>{
    console.log(req.body)
    res.status(200).json({
        "statusCode": "200"
    })
    /*res.json({
        "statusCode": "404"
    })*/

})

app.get('/', function(req,res){
    res.send('Teste se server')
})

app.listen(3000, ()=>console.log('API rodando'))
