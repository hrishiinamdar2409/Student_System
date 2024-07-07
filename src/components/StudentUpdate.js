import React, { useState } from 'react';

const StudentUpdate = ({updatedStudent}) => {
  const [student, setStudent] = useState({
    first_name: '',
    last_name: '',
    email: '',
    age: '',
    mobile: '',
    address: '',
    dob: '',
    grade: '',
    gender: '',
    student_img: ''
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatedStudent(student);
    setStudent({
      first_name: '',
      last_name: '',
      email: '',
      age: '',
      mobile: '',
      address: '',
      dob: '',
      grade: '',
      gender: '',
      student_img: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="first_name" value={student.first_name} onChange={handleChange} placeholder="First Name" />
      <input type="text" name="last_name" value={student.last_name} onChange={handleChange} placeholder="Last Name" />
      <input type="email" name="email" value={student.email} onChange={handleChange} placeholder="Email" />
      <input type="number" name="age" value={student.age} onChange={handleChange} placeholder="Age" />
      <input type="number" name="mobile" value={student.mobile} onChange={handleChange} placeholder="Mobile" />
      <input type="text" name="address" value={student.address} onChange={handleChange} placeholder="Address" />
      <input type="date" name="dob" value={student.dob} onChange={handleChange} placeholder="Date of Birth" />
      <input type="number" name="grade" value={student.grade} onChange={handleChange} placeholder="Grade" />
      <input type="text" name="gender" value={student.gender} onChange={handleChange} placeholder="Gender" />
      <input type="text" name="student_img" value={student.student_img} onChange={handleChange} placeholder="Photograph URL" />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentUpdate;
