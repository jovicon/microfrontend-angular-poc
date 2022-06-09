const express = require("express");
const cors = require("cors");

const path = require("path");

const app = express();

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.static(__dirname + "/dist/mf-template"));

app.get("/*", function (_req, res) {
  res.sendFile(path.join(__dirname + "/dist/mf-template/index.html"));
});

app.listen(process.env.PORT || 8080);
