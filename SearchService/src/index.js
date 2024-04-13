const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { PORT } = require("./config/server-config");

const apiRoutes = require("./routes/index");

const app = express();

const prepareAndStartServer = () => {
  app.use(
    cors({
      origin: "http://localhost:1234",
    })
  );

  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, () => {
    console.log(`Server running at : ${PORT}`);
  });
};
prepareAndStartServer();
