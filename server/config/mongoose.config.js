const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/petshelter", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( () => console.log("Established a connection to the database"))
    .catch( err => console.log("Something went wrong when connecting to DB!", err))

require("../models/Pet");