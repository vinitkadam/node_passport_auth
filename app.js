const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();

//EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

//routes
const indexRoutes = require("./routes/index");
const userRoutes = require("./routes/users");

app.use("/", indexRoutes);
app.use("/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on port ${PORT}`));
