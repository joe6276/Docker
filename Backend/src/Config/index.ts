import dotenv from 'dotenv'
import path from 'path'
import mssql from 'mssql'
dotenv.config({ path: path.resolve(__dirname, '../../.env') })
export const sqlConfig = {

  user:"sa",
  password:"Amazing@2023",
  database: "DockerTodo",
  server: 'localhost',

  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}

async function Run (){
 try {
  let pool =await mssql.connect(sqlConfig);
  if(pool.connected){
    console.log("Connected")
  }else{
    console.log("Not connected")
  }
 } catch (error) {
  console.log(error)
 }
}

Run()