const mongoose = require("mongoose");
const env = require("../util/validateport");

const connectDb = async () => {
    try {
        const connection = await mongoose.connect(env.connection_string);
        console.log("connection extablished", connection.connection.host, connection.connection.name);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb;