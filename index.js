
const express = require('express');
const axios = require('axios')
const cors = require('cors');
const app = express();

app.use(cors({
  origin: '*'
}));

app.get('/', (req, res) => {
  const ipAddress = req.socket.remoteAddress;
  console.log(ipAddress);
res.json({"status":"true","message":"Hi charan server is alive"})
});
app.listen(PORT, () => {
  console.log(`server is running on PORT:${PORT}`);
});

