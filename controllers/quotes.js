const Quote = require("../models/quotes");

// get all Quotes request controllers
async function handleGetAllQuotes(req, res) {
  try {
    const getAllQuotes = await Quote.find({}).sort({ QuoteId: 1 });
    res.status(201).send(getAllQuotes);
  } catch (error) {
    res.status(400).send(error);
  }
}

// find Quotes by id controllers
async function handleGetQuotesById(req, res) {
  try {
    const _id = req.params.id;
    const getQuote = await Quote.findById(_id);
    res.send(getQuote);
  } catch (error) {
    res.status(400).send(error);
  }
}

// Quotes data Insertion controllers
async function handlePostAllQuotes(req, res) {
  try {
    const body = req.body;
    if (
      !body ||
      !body.quoteTitle ||
      !body.author ||
      !body.state||
      !body.category
    ) {
      return res.status(400).json({ msg: "All fields are required." });
    }
    const count = await Quote.countDocuments({});
    const result = await Quote.create({
      QuoteId: count + 2,
      quoteTitle: body.quoteTitle,
      author: body.author,
      category: body.category,
      state: body.state,
    });

    console.log("result: ", result);
    console.log("Received body:", body);
    return res.status(201).json({ msg: "success", QuoteId: result.QuoteId });
  } catch (error) {
    console.error("Error in handlePostAllQuotes:", error);
res.status(400).json({ msg: "Failed to add quote", error: error.message });
  }
}

// Quotes Data updation controllers
async function handlePatchAllQuotes(req, res) {
  try {
    const _id = req.params.id;
    const getQuote = await Quote.findByIdAndUpdate(_id, req.body, { new: true });
    res.send(getQuote);
  } catch (error) {
    res.status(400).send(error);
  }
}

// Quotes Data deletion controllers
async function handleDeleteAllQuotes(req, res) {
  try {
    const _id = req.params.id;
    const getQuote = await Quote.findByIdAndDelete(_id);
    res.send(getQuote);
  } catch (error) {
    res.status(500).send(error);
  }
}

// Search by author name controller
async function handleSearchByKey(req, res) {
  try {
    const { author } = req.query;

    if (!author) {
      return res.status(400).json({ msg: "Author query parameter is required" });
    }

    const searchResults = await Quote.find({
      author: { $regex: author, $options: "i" }
    });

    if (searchResults.length === 0) {
      return res.status(404).json({ msg: "No quotes found for the specified author" });
    }

    res.status(200).send(searchResults);
  } catch (error) {
    res.status(500).send(error);
  }
}


module.exports = {
  handleGetAllQuotes,
  handlePostAllQuotes,
  handlePatchAllQuotes,
  handleDeleteAllQuotes,
  handleGetQuotesById,
  handleSearchByKey,
};
