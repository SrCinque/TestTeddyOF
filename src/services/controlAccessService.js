import pkg from 'jsonwebtoken';
const { sign } = pkg;
import { config } from 'dotenv';

config()

class controlAccessService{

    async access(userId){

        const secret = process.env.SECRET_KEY

        const token = sign({userId: userId}, secret, {expiresIn: 3600})

        console.log(token)
        return token;

    }

    

}


export {controlAccessService}