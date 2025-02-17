const express = require('express');
const app = express();

const PORT = 7000 ;

app.get('/Signup'), (req,res) => {
    const {username,password,DOB,email} = req.query
}

if(username) {
    if (username.length < 0)   {
        return res.send ("Username cannot be empty")
    }
}


if(email) {
    if (!email.includes('@') || !email.includes('.') || email.indexOf('@') || email.LastindexOf('.') )  {
        return res.send ("Email cannot be empty")
    }
}

if (password) {
    if (password.length < 8)   {
        return res.send ("Password length should be greater than 8 or less than or equal to 16")
    }
}


if (DOB){
    const DateofBirth =NewDate(DOB);
    const CurrentDate = NewDate();
}

res.send("Sucessfully Signedup")

app.listen(PORT ,  ()   => {
    console.log(`serevre is running on http://localhost:${PORT}`)

}); 
   

