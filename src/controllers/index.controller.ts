import { Request, Response } from 'express'
import { pool } from '../database'
import { QueryResult } from 'pg'
export const getCtg = async (req: Request, res: Response): Promise<Response> => {
    
    try {
        const response: QueryResult = await pool.query('SELECT * FROM categorias');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server Error')
    }
}

export const getCtgById = async(req:Request , res: Response): Promise<Response> => {

    try{
        const id = parseInt(req.params.id)
      const response: QueryResult = await pool.query('SELECT * FROM categorias WHERE id_categoria= $1', [id]);
      return res.json(response.rows);

    }catch (e){
        console.log(e)
        return res.status(500).json('Internal Server Error')
    }

}


export const createCtg = async (req:Request, res:Response): Promise<Response> =>{
    try{
    const {id_categoria, descripcion,estado}= req.body;
    const values = [id_categoria,descripcion,estado];
    
   const response: QueryResult = await pool.query('INSERT INTO categorias (id_categoria,descripcion,estado) VALUES($1, $2, $3)', [values]);
   
   console.log(response)
    return res.json({
        message: 'User created Succesfully',
        body:{
            categoria:{
                     id_categoria,
                     descripcion,
                     estado
            }

        } 
    })

}catch (e){
    console.log(e)
    return res.status(500).json('internal server error')
}

}
