const express = require("express");
const exphbs = require("express-handlebars");
var bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.use(express.static(__dirname));
app.set("view engine", "handlebars");

app.use(express.static(process.cwd() + '/public'));
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));


var router = require('./controllers/burgers_controllers.js')
app.use('/', router)


app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
)