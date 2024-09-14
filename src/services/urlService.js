import { prismaClient } from "../database/prisma-client.js";

class urlService{
    async redirect(code){

        const confirm = await prismaClient.link.findMany({
            where:
            {
                url: code,
                deletedAt: "null"
            }
        })

        if(confirm.length > 0){
            const urlId = confirm.map(item => item.id)[0]
            const views = confirm.map(item => item.views)[0]
            const viewUp = await prismaClient.link.update({
                where: {
                    id: urlId,
                    
                  },
                  data:{
                    views: views+1
                  }
            })

            return(confirm.map(item => item.link_orig)) 
        }else{
            return "NOT_FOUND"
        }
    }
}

export {urlService}