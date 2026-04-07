const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./routers/posts')

app.use('/posts', postsRouter)

app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});
