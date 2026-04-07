const posts = require('../data/postsData')

//index
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
    res.send('Creazione nuovo post');
};


const update = (req, res) => {
    res.send(`Modifica totale post ${req.params.id}`);
};


const modify = (req, res) => {
    res.send(`Modifica parziale post ${req.params.id}`);
};


const destroy = (req, res) => {
    res.send(`Eliminazione post ${req.params.id}`);
};

module.exports = { index, show, store, update, modify, destroy };

