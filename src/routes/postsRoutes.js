import express from "express";
import { listarPosts, postarNovoPost } from "../controllers/postController.js";

const routes = (app) => {
    app.use(express.json());
    // Permite que o servidor interprete requisições com corpo no formatoJSON
    app.get("/posts", listarPosts);
    //rota para buscar todos os posts
    app.post("/posts", postarNovoPost)
    //rota para criar um novo post
}

export default routes;
