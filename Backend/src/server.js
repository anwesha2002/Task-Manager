const dotenv = require("dotenv").config();
const env = require("./util/validateport");
const connectDb = require("./config/connectdb");
const app = require("./app");

connectDb();


const port = env.PORT ;

app.listen(port, ()=>{
    console.log(`app is running is the port ${port}`);
})