// Ação para definir o usuário atual
export function setCurrentUser(user) {
  return {
    type: 'SET_CURRENT_USER',
    payload: user,
  };
}

// Ação para remover o usuário atual
export function removeCurrentUser() {
  return {
    type: 'REMOVE_CURRENT_USER',
  };
}
