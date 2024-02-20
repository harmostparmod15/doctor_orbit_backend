const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { PORT } = require("./config/server-config");

const apiRoutes = require("./routes/index");

const app = express();

const setupAndStartServer = () => {
  app.use(cors());

  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, () => {
    console.log(`server running at ${PORT}`);
  });
};

setupAndStartServer();
