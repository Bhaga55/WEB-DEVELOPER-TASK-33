const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema({
    
    email : {
        type : String,
        required:true,
       
    },

    phoneNumber:{
        type:
            String,
            required:true,
               
    },

    name : {
        type : String,
        required: true,
    },

    secondaryEmail:{},
    secondaryPhoneNumber:{},
    ProfilePicture:{},
    address:{},
    roles:{},

    
});

const AuthModel = mongoose.model('user',AuthSchema);

module.exports =AuthModel;