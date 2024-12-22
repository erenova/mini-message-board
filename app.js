const express = require("express");
const app = express();
const path = require("path");
const { formRouter } = require("./router/formRouter");
const { indexRouter } = require("./router/indexRouter");
const { adminRouter } = require("./router/adminRouter");
const PORT = 8080;
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/", indexRouter);
app.use("/new", formRouter);
app.use("/admin", adminRouter);
app.listen(PORT, () => {
  console.log(`Server is running! PORT:${PORT}`);
});
