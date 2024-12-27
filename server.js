const express = require('express');
const app = express();
const path = require('path');

// 修改路由
app.use('/privacyterms', express.static('public'));

app.get('/', (req, res) => {
    res.redirect("https://thehope.co");
});

// 其他 API 或路由（可選）
app.get('/privacyterms', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'privacy.html'));
});

// 啟動伺服器
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});