const express = require('express')
require('dotenv').config();
const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
const PORT = process.env.PORT || 3000;

const defaultRoutes = require('./routes/defaultRoutes')
app.use('/',defaultRoutes)
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });