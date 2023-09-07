const app = require("./startup/app");
const db = require("./startup/db");
const PORT = process.env.PORT;

require("./routes")(app);

app.use((err, req, res, next) => {
  const errorMessage = err.message;
  const status = err.status || 500;

  return res.status(status).json({ error: errorMessage });
});

app.listen(PORT, async () => {
  try {
    console.log(`Running on port: ${PORT}`);
    await db();
    console.log(`Connected to database: ${process.env.MONGODB_URI}`);
  } catch (err) {
    throw err;
  }
});
