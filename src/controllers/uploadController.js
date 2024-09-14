import { uploadService } from "../services/uploadService.js";


class uploadController{
    async run(req,res){
        const {urlId, urlTo } = req.body
        const  userId  = req.userID[0]
        const uploadExecute = new uploadService();
        const upload1 = await uploadExecute.upload(urlId,urlTo, userId);
        res.send(upload1) 
    }
}


export {uploadController}