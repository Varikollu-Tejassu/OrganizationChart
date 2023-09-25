const express = require('express');

const dotenv = require('dotenv')

const cors = require('cors')

const mysql2 = require('mysql2')



const bodyParser = require('body-parser')
const userdata = require('./routes')

dotenv.config();
const app = express()


const corsOptions = {
  origin: process.env.AUTH_URL,
  credentials: true,

}
app.use(bodyParser.json());  
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT




app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.use("/api/userdata",userdata)
  
  //when unmatched routes are found
  
  app.use( (req, res) => {
    res.status(404).send('Route is not found.');
  })
  
  const db = require("./sequelize/models")
  db.sequelize.authenticate()
  // sync(
    // to create tables everytime
    // {force:true}
  // )
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  });

  module.exports = app;
