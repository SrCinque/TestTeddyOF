import { response } from "express";
import { prismaClient } from "../database/prisma-client.js";


class uploadService{
    
    
    async upload(urlId, urlTo, userID){



            const checkUrl =  await prismaClient.link.findMany({
              where:{
                  id:urlId
              }
            })

            if(checkUrl.length > 0){
              try {
                const linkUpdate = await prismaClient.link.update({
                  where: {
                    id: urlId,
                    user_id: userID
                  },
                  data: {
                    link_orig: urlTo
                  }
                });
                return linkUpdate;
              } catch (error) {
                console.error(error);
                return { error: 'Erro ao atualizar link' }; // ou qualquer outra resposta de erro que você queira
              }
              
            }else{
              return "NOT_FOUND"
            }

           
        
    }
}


export {uploadService}