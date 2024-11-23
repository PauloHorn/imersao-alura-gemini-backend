import {getTodosPosts, criarPost} from "../models/postsModel.js";

export async function listarPosts(req, res) {
    const posts = await getTodosPosts();
    // Quando uma requisição GET for feita para a rota "/posts", a função assíncrona `getTodosPosts()` é chamada para obter todos os posts do banco de dados.
    res.status(200).json(posts);
    // Envia uma resposta com status 200 (OK) e o array de posts no formato JSON.
  }

  export async function postarNovoPost(req, res) {
    const novoPost = req.body;
    try {
      const postCriado = await criarPost(novoPost);
      res.status(200).json(postCriado);
    } catch(erro) {
      console.error(erro.message);
      res.status(500).json({"Erro":"Falha na requisição"})
    }
  }
