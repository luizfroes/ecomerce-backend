const express = require("express");
const routes = require("./routes");
const { logError, logInfo } = require("./utils/logger");
// import sequelize connection
const connection = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
const init = async () => {
  try {
    await connection.sync({ force: false });
    logInfo("DB connection", "Success");

    app.listen(PORT, () =>
      logInfo("Server connection", `http://localhost:${PORT}`)
    );
  } catch (error) {
    logError("DB connection", error.message);
  }
};

init();
