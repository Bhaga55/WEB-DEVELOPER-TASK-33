const express =require("express");
const API_SERVER =require("./services/index.js");
const bodyParser = require('body-parser');
const configDotenv =require("dotenv");




const cors = require('cors');

configDotenv.config();

// const { init } =require("./dbconfig");

// init();






const HTTP_SERVER =express();


HTTP_SERVER.use(bodyParser.json());
HTTP_SERVER.use(bodyParser.urlencoded({extended: true}));
HTTP_SERVER.use(
    cors()
);

const PORT =5000;

HTTP_SERVER.listen(PORT,'localhost',()=>{
    console.log(`Listening to request on the port ${PORT}`);
}); 

HTTP_SERVER.get("/",(req, res, next) =>{

    return res.status(200).json({
        message:"Server started successfully",
    });
});

HTTP_SERVER.use("/api",API_SERVER);




