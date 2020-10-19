const express = require("express");

const app = express();

app.use(express.static("./dist/SapientInterview/browser"));

app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/SapientInterview/browser" })
);

app.listen(process.env.PORT || 8080);
