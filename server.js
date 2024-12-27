const express = require('express');
const path = require('path');

const app = express();

// 提供靜態檔案服務
app.use(express.static('public'));

// 主路由回傳隱私條款頁面
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'privacy.html'));
});

// 啟動伺服器
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});