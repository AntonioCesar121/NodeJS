import { Router } from "express";
import { home, login, registro, insertUsers, showUsers } from "../controllers/controllers.js";

const router=Router();

router.get('/', home);
router.get('/login', login);
router.get('/registro', registro);
router.get('/showUsers', showUsers);
router.post( '/insertUsers', insertUsers);
router.get('/connect',  async(req,res)=>{
    const [result]=await pool.query('SElect 1+1 as result')
    res.json(result[0])
})


export default router;