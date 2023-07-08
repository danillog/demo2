import { Action } from 'redux';

interface UserState {
  // Adicione aqui as propriedades do estado do usuário
}

const initialState: UserState = {
  // Inicialize aqui o estado do usuário
};

function userReducer(state = initialState, action: Action): UserState {
  switch (action.type) {
    // Manipule aqui as ações do usuário
    default:
      return state;
  }
}

export default userReducer;
