module.exports = (app) => {
  app.use("/api", require("./aggregate.router"));
};
