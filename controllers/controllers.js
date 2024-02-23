import {pool} from '../db.js';
export const home=(req,res)=> res.render('home', {title:'Home'})
export const login=(req,res)=> res.render('login', {title:'Login'})
export const registro=(req,res)=> res.render('registro', {title:'Registro'})

export const showUsers= async(req,res)=>{
const {nameuser, password}=req.body;
await pool.query("insert into users (nameuser, password) values(?,?)",[nameuser,password]);
res.send('ok')
}

export const insertUsers= async (req,res) =>{
    const [rows]=await pool.query('SElect * from users');
    res.json(rows)
} 