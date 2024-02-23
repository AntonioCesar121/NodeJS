console.log("butano");

import express  from 'express';
import {dirname, join} from 'path';
import  {fileURLToPath} from 'url';
import indexRoute from './route/index.js';
import { PORT } from './config.js';

const app=express();
app.use(express.json());


const __dirname=dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

app.set('view engine','ejs')
app.set('views', join(__dirname, 'views')); 

app.use(indexRoute);

app.use(express.static(join(__dirname, 'public')));

app.listen(process.env.PORT || PORT);
console.log("logrado");



app.get('/',(req,res)=> res.send('home', {title:'Home'}));
app.get('/login',(req,res)=> res.send('login', {title:'Login'}));
app.get('/registro',(req,res)=> res.send('registro', {title:'Registro'}));
