import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = ({ addStudent }) => {
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
  });

  const [studentImg, setStudentImg] = useState(null);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setStudentImg(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(student).forEach((key) => {
      formData.append(key, student[key]);
    });
    if (studentImg) {
      formData.append('student_img', studentImg);
    }

    try {
      const response = await axios.post('http://localhost:3001/student', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      addStudent(response.data);
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
      });
      setStudentImg(null);
    } catch (error) {
      console.error('There was an error adding the student!', error);
    }
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
      <input type="file" name="student_img" onChange={handleFileChange} />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
