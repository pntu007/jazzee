const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });
const app=require('./app');
const port = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE,
  {useNewUrlParser: true})
  .then(()=>console.log('Database Connected Successfully!!'));

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
  });