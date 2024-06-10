
import React from 'react';

const Opcoes = () => {
    const  textoOpcoes = ['CADASTRO', 'CONSULTA', 'INFORMAÇÕES']

    return (
        <ul className='opcoes'>
            { textoOpcoes.map((texto) => (
                <li className='opcao'><p>{texto}</p></li>
            ))}        
        </ul>   
    
  );
  
};

export default Opcoes;