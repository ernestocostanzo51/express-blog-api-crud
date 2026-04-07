const posts = require('../data/post')

//index
const index =('/' ,(req, res) => {
    let postFiltred = posts
    if(req.query.tags){
        postFiltred = posts.filter(post =>post.tags.includes(req.query.tags))
    }
    res.json(postFiltred)
})

const show = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    if (!post) {
        return res.status(404).json({ error: "Post non trovato" });
    }
    res.json(posts);
}

;

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

