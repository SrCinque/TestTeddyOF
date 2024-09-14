import { prismaClient } from "../database/prisma-client.js";


class uploadService{
    
    
    async upload(urlId, urlTo){
        try{
            //ADICIONAR VERIFICAÇÃO SE A URL EXISTE ANTES DE EXECUTAR O UPDATE
            const linkUpddate = await prismaClient.link.update({
                where:{
                    id: urlId
                },
                data:{
                    link_orig: urlTo
                }
            })

            return linkUpddate
        }catch(err){
            return err
        }
    }
}


export {uploadService}