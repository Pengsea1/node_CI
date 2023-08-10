// IMPORT EXPRESS SERVER
const express = require('express');
var app = express();

// IMPORT BODY-PARSER To RECEIVE JSON USING POST METHOD
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Database Connection
const mongoose = require('mongoose');
// Database Connection URL
const url = "mongodb://localhost:27017/test";

mongoose.connect(url)
    .then(() => {
        console.log('NODEJS TO MongoDB CLOUD Connection ESTABLISH.....');
    })
    .catch(err => {
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
        process.exit();
    });
    
    
// CREATE SCHEMA and MODEL
const schema_mongoose = require('mongoose');
const EmployeeSchema = schema_mongoose.Schema(
    {
      empid: { type: Number },
      name: { type: String },
      email: { type: String },
      password: { type: String },
    },
    {
        timestamps: true
    }
);
EmpModel = schema_mongoose.model('user', EmployeeSchema);



app.post('/reg', (req, res) => {
    const empobj = new EmpModel({
        empid: req.body.eid,
        name: req.body.ename,
        email: req.body.eemail,
        password: req.body.pass,
    });//CLOSE EmpModel
    //INSERT/SAVE THE RECORD/DOCUMENT
    empobj.save()
        .then(eobj => {
            res.status(200).send('DOCUMENT INSERED');
        })//CLOSE THEN
        .catch(err => {
            res.status(500).send({ message: err.message || 'Error in Employee Save ' })
        });//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
);//CLOSE POST METHOD


app.get('/viewall', (req, res) => {
    EmpModel.find()
        .then(emps => {
            res.status(200).send(emps);
        }) //CLOSE THEN
        .catch(err => {
            res.status(500).send({ message: err.message || 'Error in Fetch Employee ' })
        });//CLOSE CATCH
} //CLOSE CALLBACK FUNCTION BODY    
);//CLOSE GET METHOD


app.get('/getuser/:id', (req, res) => {
    EmpModel.find({ "empid": parseInt(req.params.id) })
        .then(objarr => {
            if (objarr.length > 0) {
                res.send(objarr);
            }
            else {
                return res.status(404).send({ message: "Note not found with id " + req.params.eid });
            }
        }) //CLOSE THEN
        .catch(err => {
            return res.status(500).send({ message: "DB Problem..Error in Retriving with id " + req.params.empid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
);//CLOSE GET METHOD


app.listen(5000, () => console.log('EXPRESS Server Started at Port No: 5000'));

