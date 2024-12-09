const express = require('express');
require('dotenv').config();

const app = express(); //Não pode excluir esse ou vai dar erro

app.get('/', (req, res) => {
    res.send('Teste de funcionamento da API! Tudo Ok!');
});

app.listen(process.env.PORT, () => {
    console.log(`App está funcionando na porta ${process.env.PORT}!`);
});


// Importando as funções para fazer o crud
const {
    consultarProdutos,
    consultarProdutoPorId,
    inserirProduto,
    alterarProduto,
    deletarProduto
  } = require('./funcoes');
  
  
  app.use(express.json()); 
  
  // Função para consultar 
  app.get('/bancoDeDados', (req, res) => {
    const produtos = consultarProdutos();
    res.json(produtos);
  });
  
  // Função para consultar pelo ID
  app.get('/bancoDeDados/:id', (req, res) => {
    const { id } = req.params;
    const produto = consultarProdutoPorId(id);
    if (produto) {
      res.json(produto);
    } else {
      res.status(404).json({ mensagem: 'Produto não encontrado' });
    }
  });
  
  // Função para inserir 
  app.post('/bancoDeDados', (req, res) => {
    const { nome, quantidade, preco } = req.body;
    const novoProduto = inserirProduto(nome, quantidade, preco);
    res.status(201).json(novoProduto);
  });
  
  // Função para alterar 
  app.put('/bancoDeDados/:id', (req, res) => {
    const { id } = req.params;
    const { nome, quantidade, preco } = req.body;
    const produtoAlterado = alterarProduto(id, nome, quantidade, preco);
  
    if (produtoAlterado) {
      res.json(produtoAlterado);
    } else {
      res.status(404).json({ mensagem: 'Produto não encontrado' });
    }
  });
  
  // Função para deletar
  app.delete('/bancoDeDados/:id', (req, res) => {
    const { id } = req.params;
    const produtoDeletado = deletarProduto(id);
  
    if (produtoDeletado) {
      res.status(204).send(); // Status 204 significa "sem conteúdo", mas a operação foi bem-sucedida
    } else {
      res.status(404).json({ mensagem: 'Produto não encontrado' });
    }
  });