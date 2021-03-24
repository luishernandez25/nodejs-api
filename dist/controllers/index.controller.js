"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCtg = exports.getCtgById = exports.getCtg = void 0;
const database_1 = require("../database");
const getCtg = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('SELECT * FROM categorias');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error');
    }
});
exports.getCtg = getCtg;
const getCtgById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield database_1.pool.query('SELECT * FROM categorias WHERE id_categoria= $1', [id]);
        return res.json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error');
    }
});
exports.getCtgById = getCtgById;
const createCtg = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_categoria, descripcion, estado } = req.body;
        const values = [id_categoria, descripcion, estado];
        const response = yield database_1.pool.query('INSERT INTO categorias (id_categoria,descripcion,estado) VALUES($1, $2, $3)', [values]);
        console.log(response);
        return res.json({
            message: 'User created Succesfully',
            body: {
                categoria: {
                    id_categoria,
                    descripcion,
                    estado
                }
            }
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('internal server error');
    }
});
exports.createCtg = createCtg;
