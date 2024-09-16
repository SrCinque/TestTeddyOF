import { config } from 'dotenv';
import { prismaClient } from "../database/prisma-client.js";


config()


class encurtarService{
    

    async encurtar(linkOrign, userId){
        const geradorHasf = () => {//Função para gerar um HASH de 6 caracteres
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let shortcode = '';
            for (let i = 0; i < 6; i++) {
              shortcode += characters[Math.floor(Math.random() * characters.length)];
            }
            return shortcode;
          };

        if(userId == null){
            const code =  geradorHasf();
            const urlBase = process.env.URL
            const urlEcurt = ''+urlBase+''+code+'';
          
            const linkToDb = await prismaClient.link.create({
                data:{
                    
                    link_orig: linkOrign,
                    url: code,
                    views: 0,
                    
                }
            })
    
    
            return linkToDb;
        }else{
            const code =  geradorHasf();
            const urlBase = process.env.URL
            const urlEcurt = ''+urlBase+''+code+'';
          
            const linkToDb = await prismaClient.link.create({
                data:{
                    
                    link_orig: linkOrign,
                    url: code,
                    user_id: userId,
                    views: 0,
                    
                }
            })
            
            const urlEncurtada = linkToDb.map(item => item.url)[0]
    
            return urlEncurtada;
            
    
        }
       
        
    }

}


export {encurtarService}