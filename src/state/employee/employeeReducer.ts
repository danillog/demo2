// state/employee/employeeReducer.ts

import { EmployeeActions, EmployeeActionTypes } from './employeeActions';

interface Employee {
  id: number;
  name: string;
  role: string;
  sector: string;
  company: string;
}

interface EmployeeState {
  employees: Employee[];
}

const initialState: EmployeeState = {
  employees: [
    {
      id: 1,
      name: 'João',
      role: 'Engenheiro',
      sector: 'Desenvolvimento',
      company: 'ABC Corp',
    },
    {
      id: 2,
      name: 'Maria',
      role: 'Gerente',
      sector: 'Marketing',
      company: 'XYZ Corp',
    },
  ],
};

export function employeeReducer(
  state = initialState,
  action: EmployeeActions
): EmployeeState {
  switch (action.type) {
    case EmployeeActionTypes.ADD_EMPLOYEE:
      return { ...state, employees: [...state.employees, action.payload] };
    case EmployeeActionTypes.REMOVE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
