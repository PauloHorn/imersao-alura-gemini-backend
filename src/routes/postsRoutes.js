import express from "express";
import multer from "multer"
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
    app.use(express.json());
    // Permite que o servidor interprete requisições com corpo no formatoJSON
    app.get("/posts", listarPosts);
    //rota para buscar todos os posts
    app.post("/posts", postarNovoPost)
    //rota para criar um novo post
    app.post("/upload", upload.single("imagem"), uploadImagem)
}

export default routes;
