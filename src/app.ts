import express ,{ Request, Response, NextFunction, Application } from "express";
import {Server} from "http";
const app:Application = express();
app.get('/',(req:Request , res:Response , next:NextFunction) => {
     res.send("Hello world!");
})

app.use((req:Request , res:Response , next:NextFunction) => {})

const server : Server = app.listen(3000, () => console.log('server running on port 3000'));