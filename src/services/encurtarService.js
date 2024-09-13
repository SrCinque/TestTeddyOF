import { config } from 'dotenv';
import { prismaClient } from "../database/prisma-client.js";


config()


class encurtarService{
    

    async encurtar(linkOrign){
        const geradorHasf = () => {//Função para gerar um HASH de 6 caracteres
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let shortcode = '';
            for (let i = 0; i < 6; i++) {
              shortcode += characters[Math.floor(Math.random() * characters.length)];
            }
            return shortcode;
          };

        
        const code =  geradorHasf();
        const urlBase = process.env.URL
        const urlEcurt = ''+urlBase+''+code+'';
      
        const linkToDb = await prismaClient.link.create({
            data:{
                
                link_orig: linkOrign,
                url: urlEcurt,
                views: 0,
                
            }
        })


        return linkToDb;
        
    }

}


export {encurtarService}