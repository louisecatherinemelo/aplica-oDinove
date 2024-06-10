const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  password: 'mypassword',
  host: 'localhost',
  database: 'materials_db',
});

client.connect();

async function inserirMaterial(tipo, nome, fabricante, numeroPatrimonio, descricao) {
  const consulta = `
    INSERT INTO materiais (tipo, nome, fabricante, numero_patrimonio, descricao)
    VALUES ($1, $2, $3, $4, $5)
  `;
  const valores = [tipo, nome, fabricante, numeroPatrimonio, descricao];

  await client.query(consulta, valores);
}

async function obterTodosMateriais() {
  const consulta = 'SELECT * FROM materiais';
  const resultado = await client.query(consulta);
  return resultado.rows;
}

async function obterMaterialPorId(idMaterial) {
  const consulta = `
    SELECT * FROM materiais
    WHERE id = $1
  `;
  const valores = [idMaterial];

  const resultado = await client.query(consulta, valores);
  return resultado.rows[0]; // Assumindo que exista apenas um material com o ID fornecido
}

async function atualizarMaterial(idMaterial, tipo, nome, fabricante, numeroPatrimonio, descricao) {
  const consulta = `
    UPDATE materiais
    SET tipo = $1, nome = $2, fabricante = $3, numero_patrimonio = $4, descricao = $5
    WHERE id = $6
  `;
  const valores = [tipo, nome, fabricante, numeroPatrimonio, descricao, idMaterial];

  await client.query(consulta, valores);
}

async function excluirMaterial(idMaterial) {
  const consulta = `
    DELETE FROM materiais
    WHERE id = $1
  `;
  const valores = [idMaterial];

  await client.query(consulta, valores);
}

module.exports = {
  inserirMaterial,
  obterTodosMateriais,
  obterMaterialPorId,
  atualizarMaterial,
  excluirMaterial
};