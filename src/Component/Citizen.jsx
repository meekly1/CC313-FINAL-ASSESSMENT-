// src/Components/Citizen.jsx
import React from 'react';

const Citizen = ({ citizen, index, toggleStatus }) => (
  <li>
    <span>No. {index + 1}</span> 
    <p>Name: {citizen.name}</p>
    <p>Age: {citizen.age}</p>
    <p>Address: {citizen.address}</p>
    <p>Status: {citizen.status}</p>
    <button onClick={() => toggleStatus(citizen.id)}>Toggle Status</button>
  </li>
);

export default Citizen;
