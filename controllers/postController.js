const posts = require('../data/postsData')


const index = (req, res) => {
    let postFiltered = posts;
    if (req.query.tags) {
        postFiltered = posts.filter(post => post.tags.includes(req.query.tags));
    }
    res.json(postFiltered);
};
const show = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    
    if (!post) {
        return res.status(404).json({
            error: "Post non trovato",
            message: `Nessun post trovato con id ${id}`
        });
    }
    
    res.json(post);
};


	


const store = (req, res) => {

    const newId = posts[posts.length - 1].id + 1;
    const newPost = {
        id: newId,
        titolo: req.body.titolo,
        contenuto: req.body.contenuto,
        immagine: req.body.immagine,
        tags: req.body.tags
    };
    
    posts.push(newPost);
    console.log(posts);
    res.status(201).json(newPost);

};


const update = (req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id)

    if (!post) {
    res.status(404);
 
    return res.json({
      error: "Not Found",
      message: "Post non trovato"
    })
  }

  post.titolo = req.body.titolo
  post.contenuto = req.body.contenuto
  post.immagine = req.body.immagine
  post.tags = req.body.tags

  console.log(post)
};


const modify = (req, res) => {
    res.send(`Modifica parziale post ${req.params.id}`);
};


const destroy = (req, res) => {
const id = parseInt(req.params.id)
  const pizza = menu.find(pizza => pizza.id === id);
 
  if (!pizza) {
    res.status(404);
 
     res.json({
         status: 404,
      error: "Not Found",
      message: "Pizza non trovata"
     }
     )
  }
  menu.splice(menu.indexOf(pizza), 1);
};


module.exports = { index, show, store, update, modify, destroy };

