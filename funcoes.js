const produtos = require('./bancoDeDados');

const conexao = require('./db'); 

const consultarProdutos = async () => {
  try {
    
    const [produtos] = await conexao.query('SELECT * FROM produtos'); // 
    return produtos; 
  } catch (erro) {
    console.error('Erro ao consultar produtos:', erro);
    throw erro; 
  }
};


const consultarProdutoPorId = async (id) => {
    try {      
      const [produto] = await conexao.query('SELECT * FROM produtos WHERE id = ?', [id]);
      return produto.length > 0 ? produto[0] : null; 
    } catch (erro) {
      console.error('Erro ao consultar produto por ID:', erro);
      throw erro;
    }
  };



  const inserirProduto = async (nome, quantidade, preco) => {
    try {
      
      const [resultado] = await conexao.query(
        'INSERT INTO produtos (nome, quantidade, preco) VALUES (?, ?, ?)',
        [nome, quantidade, preco]
      );
      
      return {
        id: resultado.insertId, 
        nome,
        quantidade,
        preco
      };
    } catch (erro) {
      console.error('Erro ao inserir produto:', erro);
      throw erro;
    }
  };



const alterarProduto = async (id, nome, quantidade, preco) => {
  try {
    
    const [resultado] = await conexao.query(
      'UPDATE produtos SET nome = ?, quantidade = ?, preco = ? WHERE id = ?',
      [nome, quantidade, preco, id]
    );

    
    return resultado.affectedRows > 0 ? { id, nome, quantidade, preco } : null;
  } catch (erro) {
    console.error('Erro ao alterar produto:', erro);
    throw erro;
  }
};



const deletarProduto = async (id) => {
    try {
      
      const [resultado] = await conexao.query('DELETE FROM produtos WHERE id = ?', [id]);
      return resultado.affectedRows > 0; 
    } catch (erro) {
      console.error('Erro ao deletar produto:', erro);
      throw erro;
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
