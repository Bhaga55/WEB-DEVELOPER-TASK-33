const express = require('express');
const { createUser,signInUser } = require('../controllers/Authetication.controller');
require("../controllers/Authetication.controller");


const AuthenticationRouter =express.Router();



// GET ALL BOOKINGS
// GET PARTICULAR BOOKING {id}
// CREATE A NEW BOOKING
// MODIFY THE BOOKING {id}
// DELETE THE BOOKINGS {id}

// localhost:5000/api/shows PATH: http://localhost:5000/api/bookings




    AuthenticationRouter.post("/signup",createUser,() => {
       return res.status(200).json({
       message: "User Created Successfully",
        });
        });

        AuthenticationRouter.post("/signin", createUser,() => {
          return res.status(200).json({
          message: "User sign",
        });
        });

      





          module.exports =AuthenticationRouter;
          
            
    









