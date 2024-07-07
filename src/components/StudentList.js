import React from 'react';
import { useNavigate } from 'react-router-dom';

const StudentList = ({ students, updateStudent, deleteStudent }) => {
  const navigate = useNavigate();

  const handleUpdate = (student) => {
    const updatedStudent = { ...student, first_name: prompt("Enter new first name", student.first_name) };
    updateStudent(student._id, updatedStudent);
  };

  const handleDetails = (id) => {
    navigate(`/students/${id}`);
  };

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            {student.first_name} {student.last_name} - {student.grade}
            <button onClick={() => handleUpdate(student)}>Update</button>
            <button onClick={() => deleteStudent(student._id)}>Delete</button>
            <button onClick={() => handleDetails(student._id)}>Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
