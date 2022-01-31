const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

let students = [
    {id :1 , name : 'student1'},
    {id :2 , name : 'student2'},
    {id :3 , name : 'student3'}
]

app.get('/api/students', (req,res)=>{
    res.send(students);
});

app.get('/api/students/:id',(req,res)=>{
    const student = students.find(s=>s.id === parseInt(req.params.id));
    if (!student)
        return res.status(404).send('The given id is not found');
    res.send(student);
});

app.listen(port,()=> console.log(`Running on ${port}`));