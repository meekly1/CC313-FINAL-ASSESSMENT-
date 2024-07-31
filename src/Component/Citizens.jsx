import React, { useState } from 'react';
import Citizen from './Citizen';

const initialCitizens = [
  { id: 1, name: "John", age: getRandomAge(), address: "UPPER LINAO", status: "Active" },
  { id: 2, name: "Jane", age: getRandomAge(), address: "LINAO TALISAY", status: "Active" },
  { id: 3, name: "Mike", age: getRandomAge(), address: "LAWAAN 1", status: "Active" },
  { id: 4, name: "Lisa", age: getRandomAge(), address: "LAWAAN II", status: "Active" },
  { id: 5, name: "John", age: getRandomAge(), address: "LAWAAN III", status: "Active" },
  { id: 6, name: "Jane", age: getRandomAge(), address: "TABUNOK TALISAY", status: "Active" },
  { id: 7, name: "Mike", age: getRandomAge(), address: "TABUNOK SAN ISIDRO", status: "Inactive" },
  { id: 8, name: "Lisa", age: getRandomAge(), address: "TANGKE TALISAY", status: "Inactive" },
  { id: 9, name: "John", age: getRandomAge(), address: "UPPER TANGKE TALISAY", status: "Inactive" },
  { id: 10, name: "Jane", age: getRandomAge(), address: "ST.MARYS LINAO", status: "Inactive" }
];

function getRandomAge() {
  return Math.floor(Math.random() * 51) + 20; 
}

const Citizens = () => {
  const [citizens, setCitizens] = useState(initialCitizens);

  const toggleStatus = (id) => {
    setCitizens((prevCitizens) =>
      prevCitizens.map((citizen) =>
        citizen.id === id
          ? { ...citizen, status: citizen.status === 'Active' ? 'Inactive' : 'Active' }
          : citizen
      )
    );
  };

  return (
    <div className="citizens-container">
      <h1>Citizens</h1>
      <ul>
        {citizens.map((citizen, index) => (
          <Citizen key={citizen.id} citizen={citizen} index={index} toggleStatus={toggleStatus} />
        ))}
      </ul>
    </div>
  );
};

export default Citizens;
