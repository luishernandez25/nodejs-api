"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("../controllers/index.controller");
const router = express_1.Router();
router.get('/ctg', index_controller_1.getCtg);
router.get('/ctg/:id', index_controller_1.getCtgById);
router.post('/ctg', index_controller_1.createCtg);
/*router.delete('/ctg/id', getCtg)
*/
exports.default = router;
