const express = require('express');
const { join } = require('path');

const app = express();
const router = express.Router();  

app.use(express.json());

router.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../build', 'index.html'))
});

app.use(router);

app.listen(3333);
console.log('rodando');