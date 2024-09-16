import { encurtarService } from "../services/encurtarService.js";
import pkg from 'jsonwebtoken';
const { verify } = pkg;
import { config } from 'dotenv';


config();
class encurtarController{

    //ADICIONAR VERIFICAÇÃO SE O LINK JÁ EXISTE BASEADO NO ID DO USUÁRIO
    //Adicionar verificação se existe o link do Usuário

    async run(req,res){

        const {linkOrign, token} = req.body
        const encurtarServ = new encurtarService();

        if(!token){
            
            const encuratarExecute = await encurtarServ.encurtar(linkOrign, userID = null)
            res.send({url: encuratarExecute})
        }else{
               const secret = process.env.SECRET_KEY
                const verify1 =  verify(token, secret, (err, decoded) => {
                if(err) res.status(401).end();

                req.userID = decoded.userId;
                
                
                
        } )

            const encuratarExecute =  await encurtarServ.encurtar(linkOrign, req.userID[0])
            const base = process.env.URL;
            res.send({url: base+encuratarExecute})
        }

        
    }

    
}


export {encurtarController}