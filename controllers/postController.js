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
        contenuto: req.body.tags,
        immagine: req.body.immagine,
        tags: req.body.tags
    };
    
    posts.push(newPost)

    console.log(posts)
    res.send('creazione nuovo post')

res.status(201);
  res.json(newPizza);
};


const update = (req, res) => {
    res.send(`Modifica totale post ${req.params.id}`);
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

