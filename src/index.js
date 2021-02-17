const express = require('express');
const app = express();

require('./dal');

app.use(require('./routes/index.routes'))

app.listen(3000);
console.log('"puerto 3000 "')