import { Action } from 'redux';

interface CompanyState {
  // Adicione aqui as propriedades do estado da empresa
}

const initialState: CompanyState = {
  // Inicialize aqui o estado da empresa
};

function companyReducer(state = initialState, action: Action): CompanyState {
  switch (action.type) {
    // Manipule aqui as ações da empresa
    default:
      return state;
  }
}

export default companyReducer;
