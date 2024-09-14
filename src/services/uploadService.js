import { response } from "express";
import { prismaClient } from "../database/prisma-client.js";


class uploadService{
    
    
    async upload(urlId, urlTo, userID){

           
            //ADICIONAR VERIFICAÇÃO SE A URL EXISTE ANTES DE EXECUTAR O UPDATE
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
        
    }
}


export {uploadService}