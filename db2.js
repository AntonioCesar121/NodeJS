import { createPool } from "mysql2/promise";
import { DB_HOST,DB_NAME,DB_PASSWORD,DB_PORT,DB_USER } from "./config";
export const pool=createPool({
    host:DB_HOST,
    user:DB_USER,
    password:DB_PASSWORD ,
    port:3306,
    database :DB_NAME,
    port:DB_PORT,
})