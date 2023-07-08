import { Employee } from '../../models/Employee';

export const EmployeeActionTypes = {
  ADD_EMPLOYEE: 'ADD_EMPLOYEE',
  REMOVE_EMPLOYEE: 'REMOVE_EMPLOYEE',
  UPDATE_EMPLOYEE: 'UPDATE_EMPLOYEE',
};

interface AddEmployeeAction {
  type: typeof EmployeeActionTypes.ADD_EMPLOYEE;
  payload: Employee;
}

interface RemoveEmployeeAction {
  type: typeof EmployeeActionTypes.REMOVE_EMPLOYEE;
  payload: number; // Assuming payload here is the id of the employee to remove
}

interface UpdateEmployeeAction {
  type: typeof EmployeeActionTypes.UPDATE_EMPLOYEE;
  payload: Employee;
}

export type EmployeeActions =
  | AddEmployeeAction
  | RemoveEmployeeAction
  | UpdateEmployeeAction;

// Action creators
export function addEmployee(employee: Employee): AddEmployeeAction {
  return {
    type: EmployeeActionTypes.ADD_EMPLOYEE,
    payload: employee,
  };
}

export function removeEmployee(employeeId: number): RemoveEmployeeAction {
  return {
    type: EmployeeActionTypes.REMOVE_EMPLOYEE,
    payload: employeeId,
  };
}

export function updateEmployee(employee: Employee): UpdateEmployeeAction {
  return {
    type: EmployeeActionTypes.UPDATE_EMPLOYEE,
    payload: employee,
  };
}
