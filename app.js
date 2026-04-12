const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./routers/postsRouter')

app.use(express.json());
const { notFound, errorsHandler } = require('./middlewares/error');
app.use(notFound)
app.use(errorsHandler)
app.use('/posts', postsRouter)

app.get('/' , (req , res ) =>{
    res.send('HOMEPAGE')
})
app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});
