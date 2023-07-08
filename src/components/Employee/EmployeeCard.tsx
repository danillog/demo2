import React from "react";

const EmployeeCard: React.FC<{ employee: { name: string, role: string, sector: string, company: string, id: string }, onDelete: () => void }> = ({ employee, onDelete }) => {
  return (
    <div>
      <h2>{employee.name}</h2>
      <p>{employee.role}</p>
      <p>{employee.sector}</p>
      <p>{employee.company}</p>
      <button onClick={onDelete}>Remover</button>
    </div>
  );
};

export default EmployeeCard;
