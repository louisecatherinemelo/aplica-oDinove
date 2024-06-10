
import React from 'react';

const MaterialForm = () => {
  return (
    <div className="material-form">
      <h1>Cadastro de Materiais</h1>
      <section>
        <form id="formulario-material">
          <div className="campo">
            <label htmlFor="tipoMaterial">Tipo de Material:</label>
            <select id="tipoMaterial" name="tipoMaterial">
              <option value="hardware">Hardware</option>
              <option value="software">Software</option>
            </select>
          </div>
          <div className="campo">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required />
          </div>
          <div className="campo">
            <label htmlFor="fabricante">Fabricante:</label>
            <input type="text" id="fabricante" name="fabricante" required />
          </div>
          <div className="campo">
            <label htmlFor="numeroPatrimonio">Número de Patrimônio:</label>
            <input type="text" id="numeroPatrimonio" name="numeroPatrimonio" />
          </div>
          <div className="campo">
            <label htmlFor="descricao">Descrição:</label>
            <input type="text" id="descricao" name="descricao" required />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </section>
    </div>
  );
  
};

export default MaterialForm;