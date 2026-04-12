const notFound = (req, res, next) => {
    res.status(404).json({
        error: "Not Found",
        message: "Spiacente, la pagina o il post che cerchi non esiste."
    });
};


const errorsHandler = (err, req, res, next) => {
    res.status(500).json({
        error: "Internal Server Error",
        message: err.message || "Errore interno del server"
    });
};


module.exports = {
    notFound,
    errorsHandler
};
