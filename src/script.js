function inserirProduto(event) {

  event.preventDefault()

  var nome = document.getElementById('nome').value
  var quantidade = document.getElementById('quantidade').value
  var codigo_produto = document.getElementById('codigo_produto').value
  var marca = document.getElementById('marca').value
  
  console.log(nome, quantidade,codigo_produto, marca)

  var mysql = require('mysql2');

  var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'Teste'
  });
  connection.connect(function (error) {
      if (error) {
          console.log(error.code)
          console.log(error.fatal);


      }
  })

  var query = `INSERT INTO produtos (nome, quantidade, codigo_produto, marca) VALUES ("${nome}", "${quantidade}", "${codigo_produto}", "${marca}")`

  connection.query(query, function (error) {
      if (error) {
          console.log("ocorreu um erro ao inserir os dados")

      } else {
          alert("cadastro efetuado com sucesso")
         
      }})
      
}

//adicionar eventos de submit para o formulário de cadastro
var lidarComFormulario = document.getElementById('lidarComFormulario');

lidarComFormulario.addEventListener('submit', inserirProduto);

