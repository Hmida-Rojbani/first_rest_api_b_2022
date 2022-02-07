const Joi = require("joi");
const express = require('express');

let router = express.Router();

let students = [
  { id: 1, name: "student1" },
  { id: 2, name: "student2" },
  { id: 3, name: "student3" },
];

router.get("", (req, res) => {
  res.send(students);
});

router.get("/:id", (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).send("The given id is not found");
  res.send(student);
});



const schema = Joi.object({
  name: Joi.string().alphanum().min(3).required(),
});

router.post("", (req, res) => {
  // if(!req.body.name )
  //     return res.status(400).send('Name is required');
  // if(req.body.name.length < 3)
  //     return res.status(400).send('Name must at least 3 chars long');
  let valid_res = schema.validate(req.body);
  if (valid_res.error)
    return res.status(400).send(valid_res.error.details[0].message);
  let student = {
    id: students.length + 1,
    name: req.body.name,
  };
  students.push(student);
  res.send(student);
});

router.put("/:id", (req, res) => {
  let student = students.find((s) => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).send("The given id is not found");
  let valid_res = schema.validate(req.body);
  if (valid_res.error)
    return res.status(400).send(valid_res.error.details[0].message);
  student.name = req.body.name;
  res.send(student);
});

router.delete("/:id", (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).send("The given id is not found");
  students = students.filter((s) => s.id !== parseInt(req.params.id));
  res.send(student);
});

module.exports=router;
