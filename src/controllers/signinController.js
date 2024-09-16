import { signinService } from "../services/signinService.js";


class signinController{

    async run(req,res){
        const {name,email, senha} = req.body

        if(email == "" || senha == ""){
            res.status(400).send({error_code: "INVALID_TYPE", error_description:"Email ou Senha invalidos!"})
        }else{
            const signinServ = new signinService();
            const signinExecute = await signinServ.signin(name,email,senha)

            if(signinExecute == "USER_EXIST"){
                res.status(401).send({error_code:"USER_EXIST", error_description:"O usuário já existe!"})
            }

            res.status(200).send(signinExecute)
        }
    }

}


export {signinController}