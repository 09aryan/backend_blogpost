const mongoose = require('mongoose');
require('dotenv').config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('DB CONNECTED SUCCESSFULLY');
    })
    .catch((err) => {
        console.log('DB FACING CONNECTION ISSUES');
        console.error(err);
        process.exit(1);
    });
};

module.exports = connectWithDb;
