import { listService } from "../services/listService.js";

class listController{

    async run(req,res){

        const  userId  = req.userID[0]
        console.log(userId)
        const listExecute = new listService();
        const list = await listExecute.listar(userId)

        if(list == "NOT_FOUND"){
            res.status(404).send({err_code:"NOT_FOUND",error_desc:"LISTA DE LINKS NÃO ENCONTRADA"})
        }else{
            res.status(200).send(list)
        }
    }

}


export {listController}