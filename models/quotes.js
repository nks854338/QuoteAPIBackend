const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
    QuoteId: {
        type: Number,
        required: true,
        unique: true,
      },
      quoteTitle: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        default: "Done",
      },
    }
);

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;
