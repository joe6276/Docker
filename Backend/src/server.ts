import express,{json} from 'express'

import cors from 'cors'
import router from './Routes'

const app= express()

app.use(cors())
app.use(json())


app.use('/todos', router)

app.listen(4000, ()=>{
    console.log("App Running")
})