// Ação para adicionar um funcionário
export function addEmployee(employee) {
  return {
    type: 'ADD_EMPLOYEE',
    payload: employee,
  };
}

// Ação para remover um funcionário
export function removeEmployee(employeeId) {
  return {
    type: 'REMOVE_EMPLOYEE',
    payload: employeeId,
  };
}

// Ação para atualizar um funcionário
export function updateEmployee(employee) {
  return {
    type: 'UPDATE_EMPLOYEE',
    payload: employee,
  };
}
