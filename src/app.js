import express from 'express';
import { loginControler } from './controllers/loginController.js';
import { encurtarController } from './controllers/encurtarController.js';
import { urlController } from './controllers/urlController.js';
import { uploadController } from './controllers/uploadController.js';
import { signinController } from './controllers/signinController.js';
import { deletController } from './controllers/deletController.js';
import pkg from 'jsonwebtoken';
const { verify } = pkg;

import { config } from 'dotenv';
import { listController } from './controllers/listController.js';


const app = express();



config()





app.use(express.json());


const verifyAccess = (req,res, next) => {

    const { token } = req.body
   
        const secret = process.env.SECRET_KEY
    const verify1 =  verify(token, secret, (err, decoded) => {
        if(err) res.status(401).end();

        req.userID = decoded.userId;
        next();
    } )
    
    
}

app.patch('/upload',verifyAccess, (req,res)=>{
    return new uploadController().run(req,res)
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
    return new loginControler().run(req,res)
})

app.get('/list',verifyAccess, (req,res)=>{
    
    return new listController().run(req,res)
    /*res.json({
        "statusCode": "404"
    })*/

})



app.get('/:code', (req,res)=>{
    return new urlController().run(req,res);
})

app.get('/', function(req,res){
    res.send('Teste se server')
    const url = process.env.URL
    console.log(url)
})


app.delete('/delete', verifyAccess, (req,res)=>{
    return new deletController().run(req,res)
})
app.listen(3000, ()=>console.log('API rodando'))
