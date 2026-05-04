const express = require('express');
const app = express();
app.use(express.json());

// Example JSON data
const student = [
    {id: 101,name: "Sadhika",branch: "IT"},
    {id: 102,name: "Samhitha",branch: "IT"},
    {id: 103,name: "Tejitha",branch: "IT"},
    {id: 104,name: "Annanya",branch: "IT"}
];

// Home route
app.get('/home', (req, res) => {
    res.send("Welcome to the Home Page!");
});

// Login route
app.get('/login', (req, res) => {
    res.send("Hi! I am in the Login Page");
});

// JSON route
app.get('/student', (req, res) => {
    res.json(student);
});

app.post('/students',(req,res)=>{
    const newstudent = req.body;
    student.push(newstudent);
    res.json(student);
});

app.listen(3000, () => {
    console.log("Server Running on port Number 3000");
});