const express = require('express')

module.exports = function server()
{
    const app = express()
    const port = 5888
    app.use(express.static('public'))
    app.set('view engine', 'ejs');

    app.get('/', (req, res) => {
        res.render('index');
    })

    app.listen(port);
}


