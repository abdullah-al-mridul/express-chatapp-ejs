const createError = require("http-errors");
//404 error handler
const notFoundHandler = (req, res, next) => {
  next(createError(404, "Your requested content was not found!"));
};

//default error handler
const errorHandler = (err, req, res, next) => {
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };
  res.status(err.status || 500);
  if (res.locals.html) {
    res.render("error", {
      title: "Error Page",
      message: err.message,
    });
  } else {
    res.json(res.locals.error);
  }
};
module.exports = { notFoundHandler, errorHandler };
