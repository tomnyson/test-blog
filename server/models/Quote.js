const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
  content: {
    type: String,
    requite: true,
  },
  author: {
    type: String,
    requite: true,
  },
});

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = { Quote };
