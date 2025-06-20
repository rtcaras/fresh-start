const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const server = express();

const port = process.env.PORT

// welcome endpoint//
function welcome (req, res, next ){
  res.send("welcome to my page");

}
server.get("/welcome", welcome);


//About us//

function aboutUs(req, res, next){
  res.send("About Us");
}
server.get("/aboutUs", aboutUs);

//Contact Us//

function ContactUs(req, res, next){
  res.send("Contact Us and Learn More");
}

server.get("/contactUS", ContactUs);

 function Defaults(req, res, next){
  res.send("this page does not exist");
 }

server.use(Defaults);


server.listen(port,
    function (){

        console.log('Server is running')
    }
 )

