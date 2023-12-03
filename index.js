require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const swaggerJSDocs=   require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express')
const app = express();
const {connectDb} = require('./config/db')

const options = {
  definition:{
    openapi: '3.0.0',
    info: {
      title: 'ERP Api Documentation',
      description: 'All the api for erp listed here',
      version: '1.0.0',
      },
      servers:[{
        url:'http://localhost:3001/'
      }]},
      apis: ['./routes/routes.js'],

}

connectDb();



const swaggerSpec = swaggerJSDocs(options);
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerSpec))

const database = mongoose.connection;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, }));
app.use(bodyParser.json());
app.use("/api", routes);

// database.once("connected", () => {
//   console.log("Database Connected");
// });

const port = process.env.PORT || 3001;
app.set("port", port);

database.on("error", (error) => {
  console.log(error);
  errorHandler(error);
});

app.use(express.json());

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});



