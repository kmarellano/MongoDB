const app = require("./startup/app");
const { connect, client } = require("./startup/db");
require("./routers")(app);

app.use((error, req, res, next) => {
  const { statusCode, message } = error;
  statusCode = statusCode || 500;

  return res.status(statusCode).json({ message });
});

const port = process.env.PORT;
const start = async () => {
  await connect();

  app.listen(port, () => {
    console.log(`server started at port: ${port}`);
  });
};

start();
