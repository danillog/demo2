import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addEmployee,
  removeEmployee,
} from '../../state/employee/employeeActions';
import Menu from '../Menu/Menu';
import EmployeeCard from './EmployeeCard';

interface AppState {
  employee: {
    employees: Array<{
      id: number;
      name: string;
      role: string;
      sector: string;
      company: string;
    }>;
  };
}

const Employee: React.FC = () => {
  const dispatch = useDispatch();

  const employees = useSelector((state: AppState) => state.employee.employees);

  const [newEmployee, setNewEmployee] = useState({
    name: '',
    role: '',
    sector: '',
    company: '',
  });

  const handleInputChange = (e) => {
    setNewEmployee({
      ...newEmployee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee(newEmployee));
    setNewEmployee({ name: '', role: '', sector: '', company: '' });
  };

  return (
    <div>
      <Menu />
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="name"
            value={newEmployee.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Função:
          <input
            type="text"
            name="role"
            value={newEmployee.role}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Setor:
          <input
            type="text"
            name="sector"
            value={newEmployee.sector}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Empresa:
          <input
            type="text"
            name="company"
            value={newEmployee.company}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Adicionar funcionário</button>
      </form>
      {employees &&
        employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            onDelete={() => dispatch(removeEmployee(employee.id))}
          />
        ))}
    </div>
  );
};

export default Employee;
