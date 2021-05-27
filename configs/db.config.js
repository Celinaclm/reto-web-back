const mongoose = require("mongoose"); //To connect to DB
mongoose
    .connect(`${process.env.DBURL}`, {
    useNewUrlParser: true, //To avoid warning
    useUnifiedTopology: true, //To avoid warning
    })
    .then(() => console.log("Conected to Mongo!"))
    .catch((error) => console.error(error));
module.exports = mongoose;