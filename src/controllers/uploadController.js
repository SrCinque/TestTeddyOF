import { uploadService } from "../services/uploadService.js";


class uploadController{
    async run(req,res){
        const {urlId, urlTo } = req.body
        const uploadExecute = new uploadService();
        const upload1 = await uploadExecute.upload(urlId,urlTo);
        return upload1
    }
}


export {uploadController}