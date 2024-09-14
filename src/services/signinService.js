import { prismaClient } from "../database/prisma-client.js";

class signinService{
    //ADICIONAR VERIFICAÇÃO DE SESSÃO DE LOGIN
    //ADICIONAR O .then().cath() para capiturar sucesso ou erro

    async signin(name,email,senha){
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


export {signinService}