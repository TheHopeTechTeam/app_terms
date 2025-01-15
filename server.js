const express = require("express");
const app = express();
const path = require("path");

// 修改路由
app.use("/privacyterms", express.static("public"));

app.get("/", (req, res) => {
  res.redirect("https://thehope.co");
});

app.get("/zh/privacyterms", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "privacy.html"));
});

app.get("/en/privacyterms", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "privacy_en.html"));
});

app.get("/zh/deleteaccount", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "deleteaccount.html"));
});

app.get("/en/deleteaccount", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "deleteaccount_en.html"));
});

// 啟動伺服器
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
