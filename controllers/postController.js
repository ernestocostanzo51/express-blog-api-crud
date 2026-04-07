const posts = [
    {
        id: 1,
        titolo: "Ciambellone",
        contenuto: "La ricetta della nonna per un ciambellone soffice.",
        immagine: "images/ciambellone.jpeg",
        tags: ["Dolci", "Cucina"]
    },
    {
        id: 2,
        titolo: "Cracker alla Barbabietola",
        contenuto: "Uno snack salutare e colorato.",
        immagine: "images/cracker_barbabietola.jpeg",
        tags: ["Snack", "Salute"]
    },
    {
        id: 3,
        titolo: "Pane fritto dolce",
        contenuto: "Il gusto della semplicità fritto in padella.",
        immagine: "images/pane_fritto.jpeg",
        tags: ["Dolci", "Tradizione"]
    },
    {
        id: 4,
        titolo: "Pasta allo Scoglio",
        contenuto: "Tutto il sapore del mare in un primo piatto.",
        immagine: "images/pasta_scoglio.jpeg",
        tags: ["Primi", "Pesce"]
    },
    {
        id: 5,
        titolo: "Torta Paesana",
        contenuto: "La torta di pane tipica della Brianza.",
        immagine: "images/torta_paesana.jpeg",
        tags: ["Dolci", "Recupero"]
    }
];

//index
const index =('/' ,(req, res) => {
    res.json(posts)
})

const show = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    if (!post) {
        return res.status(404).json({ error: "Post non trovato" });
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

