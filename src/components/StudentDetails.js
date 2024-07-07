import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const StudentDetails = ({ students }) => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const foundStudent = students.find(s => s._id === id);
    setStudent(foundStudent);
  }, [id, students]);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Student Details</h2>
      <p>First Name: {student.first_name}</p>
      <p>Last Name: {student.last_name}</p>
      <p>Email: {student.email}</p>
      <p>Age: {student.age}</p>
      <p>Mobile: {student.mobile}</p>
      <p>Address: {student.address}</p>
      <p>Date of Birth: {student.dob}</p>
      <p>Grade: {student.grade}</p>
      <p>Gender: {student.gender}</p>
      <p>Photograph: <img src={student.student_img} alt={`${student.first_name} ${student.last_name}`} /></p>
    </div>
  );
};

export default StudentDetails;
