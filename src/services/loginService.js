import { prismaClient } from "../database/prisma-client.js";
import { controlAccessService } from "./controlAccessService.js";

    //MUDAR CÓDIGO PARA REALIZAR O LOGIN e RETORNAR O JWT


class loginService{


    async login(email,senha){

        const userLogin = await prismaClient.user.findMany({
            where:{
                email: email,
                password: senha
            }
        })

        if(userLogin.length > 0){

            const userId = userLogin.map(item => item.id)
            const accessExecute = new controlAccessService();
            const acess = await accessExecute.access(userId)
            return acess

        }else{
            return "NOT_FOUND"
        }
    }


    /*
    async criaLogin(name,email,senha){
        const user = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                password: senha
            }
            
        })

        return user
    }*/

}


export {loginService}