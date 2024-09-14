import { loginService } from "../services/loginService.js"

class loginControler{

    //MUDAR CÓDIGO PARA REALIZAR O LOGIN

    async  logar(req,res) {

        const {name,email, senha} = req.body

        if(email == "" || senha == ""){
            res.status(400).send({error_code: "INVALID_TYPE", error_description:"Errro no email ou senha!"})
        }else{
            const loginServ = new loginService();
            const loginExecute = await loginServ.criaLogin(name,email,senha)
            res.send(loginExecute)
        }

        
    }

}


export {loginControler}