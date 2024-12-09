const produtos = require('./bancoDeDados');

const consultarProdutos = () => {
  return produtos;
};

const consultarProdutoPorId = (id) => {
  return produtos.find(p => p.id == id);
};

const inserirProduto = (nome, quantidade, preco) => {
  const novoProduto = {
    id: produtos.length + 1, // O ID será o próximo número
    nome,
    quantidade,
    preco
  };
  produtos.push(novoProduto);
  return novoProduto;
};

const alterarProduto = (id, nome, quantidade, preco) => {
  const produto = produtos.find(p => p.id == id);

  if (produto) {
    produto.nome = nome || produto.nome;
    produto.quantidade = quantidade || produto.quantidade;
    produto.preco = preco || produto.preco;
    return produto;
  } else {
    return null; // Produto não encontrado
  }
};

const deletarProduto = (id) => {
  const index = produtos.findIndex(p => p.id == id);

  if (index !== -1) {
    return produtos.splice(index, 1); // Deleta o produto e retorna o produto deletado
  } else {
    return null; // Produto não encontrado
  }
};

// Exportando as funções para que possam ser usadas no arquivo index.js
module.exports = {
  consultarProdutos,
  consultarProdutoPorId,
  inserirProduto,
  alterarProduto,
  deletarProduto
};
