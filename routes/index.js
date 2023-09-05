const routes = (app) => {
  app.use("/api", require("./prime.router"));
};

module.exports = routes;
