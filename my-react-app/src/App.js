import './App.css';
import MaterialForm from './componentes/menu';
import Header from './componentes/header';
import Pesquisa from './componentes/pesquisa';



function App() {
  return (
    <div className="App">
      <header>
        <Pesquisa/>
        <Header/> 
      </header>     
        <div className='box' alt='box'>
          <MaterialForm></MaterialForm>
        </div>
    </div>
  );
}

export default App;


const express = require('express');
const app = express();
const port = 3000;
const { inserirMaterial, obterTodosMateriais, obterMaterialPorId, atualizarMaterial, excluirMaterial } = require('./db');

// Inserir material
app.post('/materiais', async (req, res) => {
  const { tipo, nome, fabricante, numeroPatrimonio, descricao } = req.body;
  await inserirMaterial(tipo, nome, fabricante, numeroPatrimonio, descricao);
  res.status(201).send('Material inserido com sucesso');
});

// Obter todos os materiais
app.get('/materiais', async (req, res) => {
  const materiais = await obterTodosMateriais();
  res.json(materiais);
});

// Obter material por ID
app.get('/materiais/:id', async (req, res) => {
  const idMaterial = parseInt(req.params.id);
  const material = await obterMaterialPorId(idMaterial);
  if (material) {
    res.json(material);
  } else {
    res.status(404).send('Material não encontrado');
  }
});

// Atualizar material
app.put('/materiais/:id', async (req, res) => {
  const idMaterial = parseInt(req.params.id);
  const { tipo, nome, fabricante, numeroPatrimonio, descricao } = req.body;
  await atualizarMaterial(idMaterial, tipo, nome, fabricante, numeroPatrimonio, descricao);
  res.status(200).send('Material atualizado com sucesso');
});

// Excluir material
app.delete('/materiais/:id', async (req, res) => {
  const idMaterial = parseInt(req.params.id);
  await excluirMaterial
});
