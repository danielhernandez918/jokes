const express = require("express");

const app = express();
require("./config/mongoose.config")
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

// const Routes = require('./routes/jokes.routes')
// Routes(app)
require('./routes/jokes.routes')(app)

app.listen( port, () => console.log(`Listening on port: ${port}`) );