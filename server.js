const app = require("express")();
const port = 3000;

const cors = require("cors");
app.use(cors());

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Swagger JSDoc configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Blagues API",
      version: "1.0.0",
      description: "API for retrieving blagues",
    },
    servers: [
      {
        url: "https://apiblaguesstjo.onrender.com/api/v1", // Update with your server's URL
      },
    ],
  },
  apis: ["./routes/*.js"], // Path to the main server file
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const router = require("./routes");

app.use("/api/v1", router);

app.listen(port, console.log("server is runnning..."));
