const express = require('express')
const app = express()
const port = 3000
const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
var bodyParser = require('body-Parser');
var mongoose = require('mongoose')
var mongodb = 'mongodb://127.0.0.1/DATABASE_16'
mongoose.connect(mongodb, { useNewUrlParser: true })
var db = mongoose.connect
var User = require('./UserSchema')
var Student = require('./DataSchema')

app.use(express.json());
app.use(express.urlencoded());

var router = express.Router();
var path = __dirname + '/views/';
app.use(express.static(__dirname + '/public'));
app.use("/", router);

router.get("/home", function (req, res) {
    // res.redirect("/sub_menu")
    //res.sendFile(path + "atm2.html");
    var param = req.query.image
    var cardno = req.query.cardno

    console.log("hello " + param)
    if (param) {
        res.sendFile(path + "home_img.html");
    } else {
        res.sendFile(path + "home.html");
    }
    // res.sendStatus(500)
    return res
    // res.sendFile(path + "atm.html");
});
router.get("/sub_menu", function (req, res) {
    res.sendFile(path + "atm1.html");
});
router.get("/login", function (req, res) {
    res.sendFile(path + "Login.html");
});
router.get("/bankMsg", (req, res) => {
    // throw error("the mongodb server is under scheduled maintenance ");

    var toSend = {
        cardNo_echo: 12345,
        pin_echo: 0000,
        balance: 3500,
        menuItems: [
            {
                lbl: "bal",
                subMenu: [
                    { lbl: "savings Account" },
                    { lbl: "current Account" }
                ]


            },
            { lbl: "stmt" },
            { lbl: "draw" },
            { lbl: null }
        ],
        dataZn_sb: {
            lst: [3000, -100, -200, 100, 500, 100]
        }
    }

    res.json(toSend)
})
router.get("/student_c", function (req, res) {
    res.sendFile(path + "student_c.html");
})

// app.post("/regUser", 
// function handleUSer(req, res)  {
//     console.log("here in reguser")
//     // db.insert(req.body)})
//     console.log(req.body.userName)
//     var userName = User.userName
//     console.log(userName)
//     // User.create({ "userName": req.body.userName, "passWord": req.body.passWord })
//     console.log(User.find())
//     res.send(path + "login.html") 
// }

// )
app.post("/regUser", 
function (req, res)  {
    console.log("here in reguser")
    // db.insert(req.body)})
    // console.log(req.body.rollNo)
    var rollNo = Student.rollNo
        // console.log(rollNo)
    // Student.create({ "name": req.body.name, "rollNo": req.body.rollNo, "dob": req.body.dob })
    var maxRollNoStu = Student.find({name:"anusha"},function(err,x){
        console.log(err)
        console.log(x[0].name)
    })
    // console.log(maxRollNoStu)
    // console.log(Student.find())
    res.send(path + "login.html") 
}

)

// function 


app.get('/reg', (req, res) => { res.send(path + "login.html") })


app.listen(port, () => console.log(`Example app listening on port ${port}!`))