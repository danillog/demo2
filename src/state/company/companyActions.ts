// Ação para adicionar uma empresa
export function addCompany(company) {
  return {
    type: "ADD_COMPANY",
    payload: company,
  };
}

// Ação para remover uma empresa
export function removeCompany(companyId) {
  return {
    type: "REMOVE_COMPANY",
    payload: companyId,
  };
}

// Ação para atualizar uma empresa
export function updateCompany(company) {
  return {
    type: "UPDATE_COMPANY",
    payload: company,
  };
}
