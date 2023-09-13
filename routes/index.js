const routes = (app) => {
  app.use("/api", require("./prime.router"));
  app.use("/api", require("./pipeline.router"));
};

module.exports = routes;
