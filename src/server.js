const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbConfig = require('./database/db');
const accountRouter = require('./routes/account.route')

const app = express();
app.use(bodyParser.json());

mongoose.connect(dbConfig.db, {
  dbName: 'stuaccount',
  auth: {
    username: 'root',
    password: 'root'
  },
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/account',accountRouter)

app.listen(8080, () => console.log('Server running on port 8080'));
