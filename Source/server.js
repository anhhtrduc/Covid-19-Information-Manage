const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
