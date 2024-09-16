import { deletService } from "../services/deletService.js";


class deletController{


    async run(req,res){
        const {urlId} =  req.body
        const userId = req.userID[0]


        const deletExecute = new deletService();
        const delet = await deletExecute.delet(userId,urlId);

        if(delet == "NOT_FOUND"){
            res.status(404).send({erro_code: "NOT_FOUND",erro_desc: "URL NÃO ENCONTRADA"})
        }else{
            res.status(200).send({success: true})
        }
    }

}


export {deletController}