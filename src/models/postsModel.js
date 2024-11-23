import conectarAoBanco from "../config/dbconfig.js"

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)
// Chama a função `conectarAoBanco` com a string de conexão obtida da variável de ambiente `STRING_CONEXAO` e armazena a conexão em uma constante. A palavra-chave `await` indica que a função é assíncrona e aguarda a conclusão da conexão antes de continuar.

export async function getTodosPosts () {
    const db = conexao.db("imersao-backend")
    // Obtém o banco de dados chamado "imersao-backend" da conexão estabelecida.
    const colecao = db.collection("posts")
    // Obtém a coleção "posts" dentro do banco de dados.
    return colecao.find().toArray()
    // Executa uma consulta para encontrar todos os documentos (posts) na coleção e retorna os resultados como um array.
  };

export async function crirPost(novoPost) {
  const db = conexao.db("imersao-backend")
  const colecao = db.collection("posts")  
  return colecao.insertOne(novoPost)
}
