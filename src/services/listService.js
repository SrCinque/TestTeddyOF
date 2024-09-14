import { prismaClient } from "../database/prisma-client.js";

class listService{

    //ADICIONAR VERIFICAÇÃO DE USUÁRIO JWT

    async listar(userId){

        const listLinks = await prismaClient.link.findMany({
            where:
            {
                user_id: userId
            }
        })


        if(listLinks.length > 0){
            const response = {
                "user_id": userId,
                "list_links":listLinks
            }

            return response
        }else{
            return "NOT_FOUND"
        }

    }

}


export {listService}