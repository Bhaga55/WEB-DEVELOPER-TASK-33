const nodemailer = require("nodemailer");

const transport =nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"process.env.APP_REGISTERED_USER",
        pass:"fogd wokx zowo otad",
    },
});


const mailOptions ={
    from:"bhaga454@gmail.com",
    req.body.email,
    to:"bhagavanthk29@gmail.com",
    subject:"Hello from gmail using API",
    text:"Hello from gmail email using API",
    html:"<h1>Hello from gmail using ApI</h1>",
    
};

async function initiateEmail(from, to, subject, body, html){
    console.log("Sending mail");
    const mailOptions =  {

    from :from,
    to :to,
    subject :subject,
    text :body,
   
    html :html,
};

    

    try{
        const mail =await transport.sendMail({..mailOptions});
        console.log(mail);
    }catch (error){
        console.log("Error sending mail",error);
    }

}  


    






module.exports ={
    sendMail,
};



