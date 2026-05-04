const express = require('express');
const app = express();

const PORT = 3001;

// Middleware to parse JSON
app.use(express.json());

// Dummy student data (in-memory)
let students = [
    { id: 1, name: "Sadhika", marks: 85 },
    { id: 2, name: "Ravi", marks: 70 }
];


// ✅ GET → Fetch all students
app.get('/students', (req, res) => {
    res.json(students);
});


// ✅ POST → Add new student
app.post('/students', (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        marks: req.body.marks
    };

    students.push(newStudent);
    res.json({ message: "Student added", student: newStudent });
});


// ✅ PUT → Update student
app.put('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    student.name = req.body.name || student.name;
    student.marks = req.body.marks || student.marks;

    res.json({ message: "Student updated", student });
});


// ✅ DELETE → Remove student
app.delete('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);

    students = students.filter(s => s.id !== id);

    res.json({ message: "Student deleted" });
});


// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});