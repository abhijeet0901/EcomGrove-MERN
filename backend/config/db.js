const mongoose = require("mongoose");
exports.dbConn = () => {
  const dbURL =
    ".....Add your MongoDB URL.....";
  mongoose
    .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
      //warning
      console.log("DB Cnnted");
    })
    .catch((err) => console.log(err));
};
