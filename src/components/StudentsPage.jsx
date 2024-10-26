// src/components/StudentsPage.js
import React from "react";

const StudentsPage = ({ students }) => {
  return (
    <div className="students-page">
      <h1>Students</h1>
      {students.length > 0 ? (
        students.map((student) => (
          <div key={student.id} className="student-card">
            <h3>{student.name}</h3>
            <p>Department: {student.department}</p>
            <p>Contact: {student.contact}</p>
          </div>
        ))
      ) : (
        <p>No students found.</p>
      )}
    </div>
  );
};

export default StudentsPage;
