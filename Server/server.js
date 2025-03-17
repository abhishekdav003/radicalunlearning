import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config();

// files
import DataBaseConfig from './config/dataBase/DataBaseConfig.js'

const app = express()

app.use(cors({
credentials : true,
origin : "http://localhost:5173"
}))

app.use(express.json());

const PORT=process.env.PORT || 30001

DataBaseConfig().then(()=>{
    app.listen(PORT,'0.0.0.0',()=>{
console.log('server is running on port:', PORT)
    })
})
