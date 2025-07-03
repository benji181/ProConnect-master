import React from 'react';

const CourseCard = ({ course }) => (
  <div style={{
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  }}>
    <h3>{course.title}</h3>
    <p>{course.description}</p>
    <button style={{
      backgroundColor: '#28a745',
      color: '#fff',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      cursor: 'pointer'
    }}>Start Course</button>
  </div>
);

export default CourseCard;
