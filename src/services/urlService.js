import { prismaClient } from "../database/prisma-client.js";

class urlService{
    async redirect(code){

        const confirm = await prismaClient.link.findMany({
            where:
            {
                url: code
            }
        })

        if(confirm.length > 0){
            return(confirm.map(item => item.link_orig)) 
        }else{
            return "NOT_FOUND"
        }
    }
}

export {urlService}