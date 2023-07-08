import { Action } from 'redux';

interface EmployeeState {
  // Adicione aqui as propriedades do estado do funcionário
}

const initialState: EmployeeState = {
  // Inicialize aqui o estado do funcionário
};

function employeeReducer(state = initialState, action: Action): EmployeeState {
  switch (action.type) {
    // Manipule aqui as ações do funcionário
    default:
      return state;
  }
}

export default employeeReducer;
