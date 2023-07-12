const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = 8000;
require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({extended: true}));

//routes go here
const PetRoutes = require("./routes/petRoutes");
PetRoutes(app);
app.listen(port, () => console.log("The server is listening on port " + port));
