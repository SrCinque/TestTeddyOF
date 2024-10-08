import { prismaClient } from "../database/prisma-client.js";

class signinService{
    

    async signin(name,email,senha){
        const checkSignin =  await prismaClient.user.findMany({
            where:{
                email:email
            }
        })

        if(checkSignin.length > 0){

            return "USER_EXIST"

        }else{

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
}


export {signinService}