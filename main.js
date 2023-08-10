const ex = require('express');
const app = ex();

var bodyParser = require("body-parser");
app.use(bodyParser.json())

const fs = require('fs')

//Retrive All user data from json file
const getUserData = () => {
    const jsonData = fs.readFileSync('Users.json')
    return JSON.parse(jsonData)
}


//STEP 3 - START THE EXPRESS SERVER AND AFTER STARING DISPLAY MSG
app.listen(5000, () => { console.log('EXPRESS Server is Running at Port No 5000'); })

//API
app.post('/createUser', (req, res) => {
    const jsonData = getUserData();
    const newData = {
            email: req.body.email ,
            password: req.body.password ,
        };
    jsonData.push(newData);
    fs.writeFileSync('Users.json', JSON.stringify(jsonData));
    res.send("success")
});

//API
app.put('/put/:email', (req, res) => {
    const email = req.params.useremail

    const jsonData = getUserData();
    const newData = {
            email: req.body.email ,
            password: req.body.password ,
        };
    const index = jsonData.findIndex((item) => item.email === email);
 
    if (index !== -1) {
        jsonData.splice(index, 1);
    }else{
        res.send("user not exists");
    }

    jsonData.push(newData);
    fs.writeFileSync('Users.json', JSON.stringify(jsonData));
    res.send("success");
});
//API
app.delete('/delete/:email', (req, res) => {
    const email = req.params.useremail

    const jsonData = getUserData();
       
    const index = jsonData.findIndex((item) => item.email === email);
    if (index !== -1) {
        jsonData.splice(index, 1);
    }else{
        res.send("user not exists");
    }
    fs.writeFileSync('Users.json', JSON.stringify(jsonData));
    res.send("success");
});


app.get('/get', (req, res) => {
    res.send(getUserData());
});
 

 


//STEP 1 - IMPORT EXPRESS
