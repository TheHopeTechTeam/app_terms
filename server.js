const express = require('express');
const app = express();

// 修改路由
app.use('/privacyterms', express.static('public'));

// 其他 API 或路由（可選）
app.get('/privacyterms', (req, res) => {
    res.send('Welcome to thehope.app/privacyterms!');
});

// 啟動伺服器
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});