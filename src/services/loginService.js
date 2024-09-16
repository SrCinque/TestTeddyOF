import { prismaClient } from "../database/prisma-client.js";
import { controlAccessService } from "./controlAccessService.js";



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



}


export {loginService}