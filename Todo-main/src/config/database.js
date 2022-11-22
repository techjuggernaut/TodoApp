const mongoose = require ('mongoose');
const {config} = require ('dotenv');

config()
async function connect () {
  try {
    mongoose.connect(process.env.MONGO_DB_LOCAL)
      console.log('Mongodb Connected')
  }
  catch(error){
    console.log(error.mesage)
  }
}

module.exports = connect 