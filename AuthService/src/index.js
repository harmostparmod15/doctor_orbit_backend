const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { PORT } = require("./config/server-config");

const apiRoutes = require("./routes/index");

const app = express();

const setupAndStartServer = () => {
  app.use((req, res, next) => {
    res.setHeader(
      "Content-Security-Policy",
      "default-src 'self'" + "script-src 'self'"
    );

    res.setHeader("X-XSS-Protection", "0");
    res.removeHeader("X-Powered-By");
    next();
  });

  app.use(cors({ origin: "http://localhost:1234" }));

  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, () => {
    console.log(`server running at ${PORT}`);
  });
};

setupAndStartServer();
