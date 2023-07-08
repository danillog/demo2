import React from "react";
import CompanyCard from "./CompanyCard";

const Company: React.FC = () => {
  // Aqui você vai buscar as empresas do estado e renderizar os cards

  return (
    <div>
      {/* Renderizar cards de empresa aqui */}
      <CompanyCard />
    </div>
  );
};

export default Company;
