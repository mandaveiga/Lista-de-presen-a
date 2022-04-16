import React, { useState } from "react";
import "./styles.css";

import { Card } from "../../components/Card";

function Home() {
  {
    /* 
    estado tem duas posições: onde irá armazenar o elemento e qual a função que atualiza o estado
 */
  }
  const [studentName, setStudentName] = useState();
  const [students, setStudents] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setStudents([newStudent]);
  }

  return (
    <div className="container">
      <h1>Lista de presença</h1>

      <input
        type="text"
        placeholder="Digite seu nome.."
        onChange={(e) => setStudentName(e.target.value)}
      />

      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {/* componente "Card", passando como parametro name e time */}

      {students.map((student) => (
        <Card name={student.name} time={student.time} />
      ))}
    </div>
  );
}

export default Home;
