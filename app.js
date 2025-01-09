const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

const moviesRouter = require('./router/movies');
const errorsHandler = require('./middleware/errorsHandler');
const notFound = require('./middleware/notFound');

app.use(cors(
    origin = process.env.ORIGIN
));
app.use(express.static('public'));
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Pagina iniziale');
});
app.use('/movies', moviesRouter);

app.use(errorsHandler);
app.use(notFound);

app.listen(port, () => {
    console.log('Server in ascolto sulla porta ' + port);
});