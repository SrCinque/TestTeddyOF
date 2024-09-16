import { urlService } from "../services/urlService.js";


class urlController{
    async run(req,res){
        const url = req.params.code

        const urlExecute = new urlService();
        const urlRedirect = await urlExecute.redirect(url)

        
        if(urlRedirect == "NOT_FOUND"){
            res.status(404).send({err_code:"NOT_FOUND",error_desc:"URL NÃO ENCONTRADA"})
        }else{

            
            res.redirect(urlRedirect);  
        }
    }
}

export {urlController}