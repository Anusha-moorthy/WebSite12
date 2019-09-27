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
var Register = require('./RegSchema')



app.use(express.json());
app.use(express.urlencoded());

var router = express.Router();
var path = __dirname + '/views/';
app.use(express.static(__dirname + '/public'));
app.use("/", router);

router.get("/home", function (req, res) {
    // var param = req.query.param
    // var cardno = req.query.cardno
    // console.log("hello" + param)
    // if (param) {
        // res.sendFile(path + "home_img.html");
    // }
    // else {
        res.sendFile(path + "home.html");

    // }

    // return res
});
router.get("/bankMsg", function (req, res) {
    var toSend ={
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

res.json(toSend);
})

router.get("/assignment1", function (req, res) {
    var climate={
        location:london,chennai

    }
    res.json(climate);
})
router.get("/page", function (req,res){
    res.sendFile(path + "page.html");
})
router.get("/assignment1", function(req,res){
    res.sendFile(path + "assignment1.html");
})

    
app.post("/regUser",
 function (req,res,next) {
    console.log("here in reguser")
    // var regNum = Register.regNum
    // {$and:[{regNo:{$lt:6000000}},{regNo:{$gt:5000000}}]}).sort({regNo:-1}).limit(1)
    var maxValueInRange=0
    var anArray=[]
    var x1={hi:"hello"}
    var reqRegNo = req.body.regNo
    console.log("<"+reqRegNo+">")
    var numValue_regNo = parseInt(reqRegNo) //5017025
   
    var firstDigit = Math.floor( numValue_regNo/1000000);
    console.log(firstDigit)
    var rangeSt = firstDigit*1000000
    var rangeEnd = rangeSt+1000000
    
//     Register.
//   find({"regNo":5017025}).
//   limit(1).
//   exec(callback);
    var maxRegNumReg = Register.find(
        {$and:[{regNo:{$lt:rangeEnd}},{regNo:{$gt:rangeSt}}]}, function(err,x){
        // console.log(x[x.length-1])
        maxValueInRange=x[x.length-1].regNo
        // return maxValueInRange
        x1=maxValueInRange
        if(reqRegNo<maxValueInRange){
            console.log("found an error ")
            
           
        }else{
            Register.create({"name":req.body.name,"regNo":reqRegNo,"dob":req.body.dob})
        }
        if(reqRegNo<maxValueInRange){
            // throw new Error("Value is not maximum in range")
            res.status(500 ).send("Value is not maximum in range, try "+(parseInt(maxValueInRange)+1))
        }else{
            console.log(x1.hi)
            console.log(x1+" =======vs======= "+reqRegNo)
            
         
            
            // var maxVal = Math.max.apply(Math,anArray.map(function (k){return k.regNo;}))
            // console.log("maxval is"+maxVal)
            
            console.log("sending response")
            res.send(path + "login.html")
        }
       
    })
   
})


app.get('/reg', (req, res) => { res.send(path + "login.html") })


app.listen(port,()=>console.log(`exampleapp listening on port${port}!`))

