import {Pool} from 'pg'

export const pool =new Pool ({
    user: 'postgres',
    host: 'localhost',
    password: '1313',
    database:'Clase-3',
    port: 5432
});