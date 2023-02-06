const experss = require("express");

const app = experss();

const tasks = require("./routes/tasks");

const connectDB = require("./db/connect");

require("dotenv").config();

// Middleware
app.use(experss.static("./public"));
app.use(experss.json());

// Routes

app.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening in port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
