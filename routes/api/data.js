const router = require("express").Router();
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

router.get("/all/btc", async (req, res) => {
  if (req.headers.apikey) {
    const client = new MongoClient(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    await client.connect();

    const cursor = await client
      .db("algorithm")
      .collection("bitcoin")
      .find()
      .sort({ Timestamp: 1 });
    const results = await cursor.toArray();
    res.json(results);
  } else {
    res.send("something went wrong");
  }
});

router.get("/current/btc", async (req, res) => {
  if (req.headers.apikey) {
    const client = new MongoClient(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    await client.connect();
    const cursor = await client
      .db("algorithm")
      .collection("bitcoin")
      .find()
      .sort({ Timestamp: 1 });
    let results = await cursor.toArray();
    results = results[results.length - 1];
    res.json(results);
  } else {
    res.send("something went wrong");
  }
});

router.get("/all/eth", async (req, res) => {
  console.log(req.headers);
  if (req.headers.apikey) {
    const client = new MongoClient(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    await client.connect();

    const cursor = await client
      .db("algorithm")
      .collection("ethereum")
      .find()
      .sort({ Timestamp: 1 });
    const results = await cursor.toArray();
    res.json(results);
  } else {
    res.send("something went wrong");
  }
});

router.get("/current/eth", async (req, res) => {
  if (req.headers.apikey) {
    const client = new MongoClient(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    await client.connect();

    const cursor = await client
      .db("algorithm")
      .collection("ethereum")
      .find()
      .sort({ Timestamp: 1 });
    let results = await cursor.toArray();
    results = results[results.length - 1];
    res.json(results);
  } else {
    res.send("something went wrong");
  }
});

module.exports = router;
router.get("/all/bnb", async (req, res) => {
  console.log(req.headers);
  if (req.headers.apikey) {
    const client = new MongoClient(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    await client.connect();

    const cursor = await client
      .db("algorithm")
      .collection("binance")
      .find()
      .sort({ Timestamp: 1 });
    const results = await cursor.toArray();
    res.json(results);
  } else {
    res.send("something went wrong");
  }
});

router.get("/current/bnb", async (req, res) => {
  if (req.headers.apikey) {
    const client = new MongoClient(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    await client.connect();
    const cursor = await client
      .db("algorithm")
      .collection("binance")
      .find()
      .sort({ Timestamp: 1 });
    let results = await cursor.toArray();
    results = results[results.length - 1];
    res.json(results);
  } else {
    res.send("something went wrong");
  }
});

module.exports = router;
