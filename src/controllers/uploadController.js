import { uploadService } from "../services/uploadService.js";


class uploadController{
    async run(req,res){
        const {urlId, urlTo } = req.body
        const  userId  = req.userID[0]
        const uploadExecute = new uploadService();
        const upload1 = await uploadExecute.upload(urlId,urlTo, userId);

        if(upload1 == "NOT_FOUND"){
            res.status(404).send({err_code:"NOT_FOUND",error_desc:"URL não encontrada"})
        }else{
            res.status(200).send({success:"Mudança realizada com sucesso"})
        }
       
    }
}


export {uploadController}