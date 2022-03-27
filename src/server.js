const express = require('express')

module.exports = function server(data)
{
    const app = express()
    const port = 5888
    app.use(express.static('public'))
    app.set('view engine', 'ejs');

    app.get('/', (req, res) => {
        res.render('index');
    })

    app.get('/data', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    })

    app.listen(port);
}


