const express = require("express");

const app = express();

app.use(express.json());

const notes = [];

app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.send("working");
});
app.get("/notes", (req, res) => {
  res.send(notes);
});

app.listen(3000, () => {
  console.log("server is running on PORT:3000");
});
