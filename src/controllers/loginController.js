import { loginService } from "../services/loginService.js"
import { config } from 'dotenv';


config();

class loginControler{

    //MUDAR CÓDIGO PARA REALIZAR O LOGIN

    async  run(req,res) {

        const {email, senha} = req.body

        if(email == "" || senha == ""){
            res.status(400).send({error_code: "INVALID_TYPE", error_description:"Erro no email ou senha!"})
        }else{
            const loginExecute = new loginService();
            const login = await loginExecute.login(email,senha);
            
            if(login == "NOT_FOUND"){
                const local = process.env.URL
                res.status(404).send({error_code: "NOT_FOUND", error_description:"Usuário não encontrado. Use"+local+"/signin para criar seu acesso"})
            }

            res.status(200).send({token: login})
        }

      

        
    }

}


export {loginControler}