import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import StudentDetails from './components/StudentDetails';

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:3001/student');
      setStudents(response.data);
    } catch (error) {
      console.error("There was an error fetching the students!", error);
    }
  };

  const addStudent = async (student) => {
    try {
      const response = await axios.post('http://localhost:3001/student', student);
      setStudents([...students, response.data]);
    } catch (error) {
      console.error("There was an error adding the student!", error);
    }
  };

  const updateStudent = async (id, updatedStudent) => {
    try {
      const response = await axios.put(`http://localhost:3001/student/${id}`, updatedStudent);
      setStudents(students.map(student => (student._id === id ? response.data : student)));
    } catch (error) {
      console.error("There was an error updating the student!", error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/student/${id}`);
      setStudents(students.filter(student => student._id !== id));
    } catch (error) {
      console.error("There was an error deleting the student!", error);
    }
  };

  return (
    <Router>
      <div>
        <h1>Student Management</h1>
        <Routes>
          <Route path="/" element={
            <>
              <StudentForm addStudent={addStudent} />
              <StudentList 
                students={students} 
                updateStudent={updateStudent} 
                deleteStudent={deleteStudent} 
              />
            </>
          } />
          <Route path="/students/:id" element={<StudentDetails students={students} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
