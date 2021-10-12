const dotenv = require('dotenv');
const mongoose = require('mongoose');

process.on('uncaughtException', (err) => {
  console.log(err.message);
  process.exit(1);
});
dotenv.config({ path: './config.env' });
const app = require('./app');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true,
};

mongoose
  .connect(process.env.DB, options)
  .then(() => console.log('Successfully connected to the database'));

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () =>
  console.log(`Server running at port ${PORT}`)
);

process.on('unhandledRejection', (err) => {
  console.log(err.message);
  server.close(() => {
    process.exit(1);
  });
});
