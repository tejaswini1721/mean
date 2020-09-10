const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json()); //parsing the request body of POST
app.use(cors()); // ajax request

const dbadd = require("./add.user");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/adduser", async (req, res) => {
  try {
    const input = req.query;

    await dbadd.addUser(input);

    res.json({ message: "success" });
  } catch (err) {
    res.sendStatus(500);
  }
});

app.post("/adduser", async (req, res) => {
  try {
    const input = req.body;

    await dbadd.addUser(input);

    res.json({ message: "success" });
  } catch (err) {
    res.sendStatus(500);
  }
});

app.listen(3000);
