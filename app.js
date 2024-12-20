const express = require("express");
const app = express();
const path = require("path");
const newFormRouter = require("./router/newFormRouter");
const { indexRouter } = require("./router/indexRouter");
const PORT = 8080;
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/", indexRouter);
app.use("/new", newFormRouter);
app.listen(PORT, () => {
  console.log(`Server is running! PORT:${PORT}`);
});
