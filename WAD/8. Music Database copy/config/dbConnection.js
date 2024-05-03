const mongoose = require("mongoose");

const connectDB = () => {
  const uri = "mongodb://localhost:27017/music";
  mongoose
    .connect(uri)
    .then((result) =>
      console.log(
        `Connectd to ${result.connection.host + result.connection.db.databaseName}`
      )
    )
    .catch((error) => console.error(error));
};

module.exports = { connectDB };
