const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbConfig = require('./database/db');
const accountRouter = require('./routes/account.route');


const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

mongoose.connect(dbConfig.db, {
  dbName: 'stuaccount',
  auth: {
    username: process.env.MONGO_INITDB_ROOT_USERNAME || 'root',
    password: process.env.MONGO_INITDB_ROOT_PASSWORD || 'root',
  },
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/account',accountRouter)

app.listen(port, () => console.log(`Server running on port ${port}`));
