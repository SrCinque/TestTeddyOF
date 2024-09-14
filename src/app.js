import express from 'express';
import { loginControler } from './controllers/loginController.js';
import { encurtarController } from './controllers/encurtarController.js';
import { urlController } from './controllers/urlController.js';
import { uploadController } from './controllers/uploadController.js';
import { signinController } from './controllers/signinController.js';
import { config } from 'dotenv';
const app = express();


config()

app.use(express.json());

app.post('/patch', (req,res)=>{
    return new uploadController().run(req,res)
})

app.get('/:code', (req,res)=>{
    return new urlController().run(req,res);
})

app.post('/encurtar', (req,res)=>{
    return new encurtarController().run(req,res)
})

app.post('/signin', (req,res)=>{
    console.log(req)
    return new signinController().run(req,res)
})

app.post('/login', (req,res)=>{
    console.log(req)
    return new loginControler().logar(req,res)
})

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
    const url = process.env.URL
    console.log(url)
})

app.listen(3000, ()=>console.log('API rodando'))
