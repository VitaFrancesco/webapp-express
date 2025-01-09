const connection = require('../data/db');

function index(_, res) {

    const sql = 'SELECT * FROM `movies`';

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.json(results);
    })


};

function show(req, res) {
    const { id } = req.params;

    const movieSql = 'SELECT `movies`.*, AVG(`reviews`.`vote`) AS `avg_vote` FROM `movies` JOIN `reviews` ON `movies`.`id`=`reviews`.`movie_id` WHERE `movies`.`id`=?';

    const reviewSql = 'SELECT * FROM `reviews` WHERE `reviews`.`movie_id`=?';

    connection.query(movieSql, [id], (err, movieResult) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        if (movieResult.length === 0) return res.status(404).json({ error: 'Movie not found' });

        const movie = movieResult[0];

        connection.query(reviewSql, [id], (err, reviewResult) => {
            if (err) return res.status(500).json({ error: 'Database query failed' });

            movie.reviews = reviewResult;
            res.json(movie);
        })

    });
};


module.exports = { index, show };