import {Router} from 'express'
import {getCtg,getCtgById,createCtg} from '../controllers/index.controller'

const router = Router();

router.get('/ctg', getCtg)
router.get('/ctg/:id', getCtgById)
router.post('/ctg', createCtg)
/*router.delete('/ctg/id', getCtg)
*/


export default router;
