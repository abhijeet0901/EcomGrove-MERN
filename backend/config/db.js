const mongoose = require("mongoose");
exports.dbConn = () => {
  const dbURL =
    "mongodb+srv://abhijeetdubey:Abhijeet0901@cluster0.52tju.mongodb.net/coursedb?retryWrites=true&w=majority";
  mongoose
    .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
      //warning
      console.log("DB Cnnted");
    })
    .catch((err) => console.log(err));
};
