var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var passport = require("passport");
var logger = require("morgan");
require("dotenv").config();
const freeAgentModel = require("./models/freeAgent");
const mongoose = require("mongoose");

const loginRouter = require("./routes/login");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const teamsRouter = require("./routes/teams");
const agentPoolIndex = require("./routes/agentPoolIndex");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//session's authentication
app.use(
  session({
    secret: "SEIRocks!",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

//
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/freeAgentPool", agentPoolIndex);
app.use("/teams", teamsRouter);
app.use("/home", loginRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
