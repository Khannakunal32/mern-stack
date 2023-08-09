const { constants } = require('../errorConstants');

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  let errorTitle = "";

  switch(statusCode) {
    case constants.VALIDATION_ERROR:
        errorTitle = "Validation failded";
    case constants.NOT_FOUND:
        errorTitle = "Not found";
    case constants.UNAUTHORIZED:
        errorTitle = "Unauthorized";
    case constants.FORBIDDEN:
        errorTitle = "Forbidden";
    case constants.SERVER_ERROR:
        errorTitle = "Server error";
    default:       
        console.log("No Error, All good!");
  }
  res.json({
    title: errorTitle,
    message: err.message, // customized error message
    stack: err.stack, // full stack message of error used in development mode
  });
};

module.exports = errorHandler;
