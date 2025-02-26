const express = require('express')
const app = express()
var multer = require('multer');
const register = require("./method/register")
const login = require("./method/login")
const changepassword = require("./method/changepassword")
const profile = require("./method/profile")
const getallprofile = require("./method/getallprofile")
const getprofile = require("./method/getprofile")
const forgotpassword = require('./method/forgotpassword')
const city = require('./method/city')
const state = require('./method/state')
const getstate = require('./method/getstate')
const getcity = require('./method/getcity')
const getprofile_user = require('./method/getprofile_user')
const upload_images = require('./method/upload_images')
const deluser = require('./method/deluser');
const getcategory = require('./method/getcategory');
const getprofile_search = require('./method/getprofile_search');



require("dotenv").config();
const PORT = process.env.PORT || 5050;

app.use(express.json());    
app.use(express.urlencoded({extended: true})); 
app.use(express.static('public'))
app.use('/uploads',express.static('uploads'))

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
var fname ="";
var upload = multer({
    storage: multer.diskStorage({
        destination:function(req,file,folder)
        {
            folder(null,"uploads");
        },
        filename:function(req,file,fileName)
        {
           //console.log(file);
           fname = file.fieldname+"-"+Date.now()+".jpg";
           fileName(null,fname)
        }
    })
}).single("my_file");


app.get('/getstate', function (req, res) 
{
  getstate(req, res);

 })
 app.get('/getcategory', function (req, res) 
{
  getcategory(req, res);

 })
app.get('/deluser/:profile_id', function (req, res) 
{
  deluser(req, res);

})

app.post('/register', function (req, res) 
{
    register(req, res);
})
app.post('/login', function (req, res) 
{
    login(req, res);
})
app.post('/changepassword', function (req, res) 
{
    changepassword(req, res);
})
app.post('/profile',upload, function (req, res) 
{
    profile(fname,req, res);
})
app.post('/getallprofile', function (req, res) 
{
    getallprofile(req, res);
})
app.post('/getprofile', function (req, res) 
{
    getprofile(req, res);
})
app.post('/getprofile_search', function (req, res) 
{
    getprofile_search(req, res);
})
app.post('/getprofile_user', function (req, res) 
{
    getprofile_user(req, res);
})
app.post('/forgotpassword', function (req, res) 
{
    forgotpassword(req, res);
})
app.post('/city', function (req, res) 
{
    city(req, res);
})
app.post('/state', function (req, res) 
{
    state(req, res);
})
app.post('/getcity', function (req, res) 
{
    getcity(req, res);
})
app.post('/upload_images', upload, function (req, res) 
{
    upload_images(fname, req, res);
})


app.listen(PORT)
