const {cleanEnv, port, str}= require("envalid");

const env_variable = cleanEnv(process.env,{
    PORT : port(),
    connection_string : str(),
})

module.exports = env_variable;