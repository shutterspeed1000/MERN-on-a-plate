const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOURI);

module.exports = mongoose.connection;
