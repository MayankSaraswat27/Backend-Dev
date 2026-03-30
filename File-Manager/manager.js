const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();


app.use(express.json());


app.get("/read", (req, res) => {
  const filePath = path.join(__dirname, "input.txt");

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) return res.status(500).send(err.message);
    res.send(data);
  });
});


app.post("/write", (req, res) => {
  const { content } = req.body;
  const filePath = path.join(__dirname, "input.txt");

  fs.writeFile(filePath, content, err => {
    if (err) return res.status(500).send(err.message);
    res.send("File written successfully");
  });
});

app.post("/copy", (req, res) => {
  const { source, dest } = req.body;

  fs.copyFile(
    path.join(__dirname, source),
    path.join(__dirname, dest),
    err => {
      if (err) return res.status(500).send(err.message);
      res.send("File copied successfully");
    }
  );
});

app.delete("/delete", (req, res) => {
  const { filename } = req.query;

  fs.unlink(path.join(__dirname, filename), err => {
    if (err) return res.status(500).send(err.message);
    res.send("File deleted successfully");
  });
});

app.get("/list", (req, res) => {
  fs.readdir(__dirname, (err, files) => {
    if (err) return res.status(500).send(err.message);
    res.json(files);
  });
});


app.listen(3000, () => {
  console.log("File Manager running");
});
