import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
import {Request,Response,NextFunction} from 'express';

//connections and listeneres
const port = process.env.PORT;

// app.get('/' , (Request,Response,NextFunction)=> {
//   Response.send('Hello World!')

// })


connectToDatabase()
  .then(() => {
    app.listen(port, () =>
      console.log("Server Open & Connected To Database 🤟")
    );
  })
  .catch((err) => console.log(err));
