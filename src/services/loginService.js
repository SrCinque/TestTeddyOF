import { prismaClient } from "../database/prisma-client.js";


class loginService{

    async criaLogin(name,email,senha){
        const user = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                password: senha
            }
            
        })

        return user
    }

}


export {loginService}