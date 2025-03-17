import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

if(!process.env.MONGODB_CONNECTION_STRING){
    throw new Error(
        "Please provide MONGODB_CONNECTION_STRING in the .env file"
    )
    console.log('Please provide MONGODB_CONNECTION_STRING in the .env file')
}

const DataBaseConfig = async () =>{
try {
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log('DataBase Connected');
} catch (error) {
    console.log('DataBase Connection error:',error);
    process.emit(1)
}
} 

export default DataBaseConfig;

