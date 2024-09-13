import { encurtarService } from "../services/encurtarService.js";


class encurtarController{

    async run(req,res){

        const {linkOrign} = req.body

        const encurtarServ = new encurtarService();
        const encuratarExecute = await encurtarServ.encurtar(linkOrign)
        res.send({url: encuratarExecute})
    }

    
}


export {encurtarController}