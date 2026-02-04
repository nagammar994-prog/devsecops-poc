const express = require("express");
const app = express();

// Hardcoded secret (intentional for POC)
const API_KEY = "sk_test_123456789";

app.get("/", (req, res) => {
  res.send("DevSecOps POC App");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
