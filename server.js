import express from "express";

const posts = [
    {
      id: 1,
      descricao: "Uma foto teste",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      id: 2,
      descricao: "Gato fofo dormindo",
      imagem: "https://placekitten.com/400/200"
    },
    {
      id: 3,
      descricao: "Paisagem incrível",
      imagem: "https://picsum.photos/id/237/300/200"
    },
    {
      id: 4,
      descricao: "Comida deliciosa",
      imagem: "https://loremflickr.com/320/240/food"
    },
    {
      id: 5,
      descricao: "Cachorro brincando",
      imagem: "https://random.dog/woof.jpg"
    },
    {
      id: 6,
      descricao: "Gráfico de dados",
      imagem: "https://www.chartjs.org/docs/latest/samples/line.png"
    }
  ];

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
};

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});
