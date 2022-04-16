import React, { useState } from "react";
import "./styles.css";

import { Card } from "../../components/Card";

function Home() {
  /* 
    estado tem duas posições: onde irá armazenar o elemento e qual a função que atualiza o estado
 */

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

    /*imutabilidade: o conteudo não deve ser alterado e sim substituído*/

    setStudents((prevState) => [...prevState, newStudent]);
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
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </div>
  );
}

export default Home;
