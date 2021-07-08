const fs = require('fs').promises;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./../modals/userModal');

dotenv.config({ path: './../config.env' });

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true,
};
async function uploadData(type) {
  try {
    if (type === 'upload') {
      let students = await fs.readFile('./student-data.json', 'utf-8');
      let teachers = await fs.readFile('./teachers-data.json', 'utf-8');
      students = JSON.parse(students);
      teachers = JSON.parse(teachers);
      const allUsers = [...students, ...teachers];
      await User.create(allUsers);

      // await User.insertMany([...students, ...teachers]);

      console.log('uploaded');
    }
  } catch (err) {
    console.log(err.message);
  }

  process.exit();
}
mongoose
  .connect(process.env.DB, options)
  .then(() => {
    console.log('Successfully connected to the database');
    uploadData(process.argv[2]);
  })
  .catch((err) => console.log(err));
