const express = require('express')
const app = express()
const port = 3001
const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
var bodyParser = require('body-parser');

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

var router = express.Router();
var path = __dirname + '/views/';
app.use(express.static(__dirname + '/public'));
app.use("/", router);


router.get("/home", function (req, res) {
	res.sendFile(path + "atm.html");
});
router.get("/sub_menu", function (req, res) {
	res.sendFile(path + "atm1.html");
});
router.get("/login", function (req, res) {
	res.sendFile(path + "Login.html");
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))