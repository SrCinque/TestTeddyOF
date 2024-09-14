import { signinService } from "../services/signinService.js";


class signinController{

    async run(req,res){
        const {name,email, senha} = req.body

        if(email == "" || senha == ""){
            res.status(400).send({error_code: "INVALID_TYPE", error_description:"Errro no email ou senha!"})
        }else{
            const signinServ = new signinService();
            const signinExecute = await signinServ.signin(name,email,senha)
            res.send(signinExecute)
        }
    }

}


export {signinController}