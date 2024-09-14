import { prismaClient } from "../database/prisma-client.js";


class deletService{
    
    async delet(userId,urlId){
        const checkLink = await prismaClient.link.findMany({where:{id:urlId}})
        const dataAtual = new Date();
        const data = dataAtual.toISOString().split('T')[0]
        if(checkLink.length > 0){
            const deletedLink = await prismaClient.link.update({
                where: {
                  id: urlId,
                  user_id: userId
                },
                data:{
                    deletedAt: data
                }
              });
              
              return deletedLink;
        }else{
            return "NOT_FOUND"
        }
        
    }
}


export {deletService}