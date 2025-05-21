const connection = require('../data/db');

function index(req, res) {
    let sql = 'SELECT `movies`.*, AVG(`reviews`.`vote`) AS `avg_vote` FROM `movies` LEFT JOIN `reviews` ON `movies`.`id`=`reviews`.`movie_id`';

    if (req.query.search) {
        sql += ` WHERE title LIKE '%${req.query.search}%' OR director LIKE '%${req.query.search}%' OR abstract LIKE '%${req.query.search}%'`
    }

    sql += ' GROUP BY `movies`.`id`'

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        results.map((res) => {
            res.image = `http://localhost:3000/${res.image}`
        })
        res.json(results);
    })


};

function show(req, res) {
    console.log('show controller movies');

    const { id } = req.params;

    const movieSql = 'SELECT `movies`.*, AVG(`reviews`.`vote`) AS `avg_vote` FROM `movies` JOIN `reviews` ON `movies`.`id`=`reviews`.`movie_id` WHERE `movies`.`id`=?';

    const reviewSql = 'SELECT * FROM `reviews` WHERE `reviews`.`movie_id`=?';

    const noReviewSql = 'SELECT `movies`.* FROM `movies` WHERE `movies`.`id`=?'

    connection.query(reviewSql, [id], (err, reviewResult) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });

        const reviews = reviewResult;

        if (reviews.length) {
            connection.query(movieSql, [id], (err, movieResult) => {
                if (err) return res.status(500).json({ error: 'Database query failed' });
                if (movieResult.length === 0) return res.status(404).json({ error: 'Movie not found' });

                const movie = movieResult[0];
                movie.reviews = reviews
                movie.image = `http://localhost:3000/${movie.image}`;
                res.json(movie)
            });
        } else {
            connection.query(noReviewSql, [id], (err, movieResult) => {
                if (err) return res.status(500).json({ error: 'Database query failed' });
                if (movieResult.length === 0) return res.status(404).json({ error: 'Movie not found' });
                const movie = movieResult[0];
                movie.image = `http://localhost:3000/${movie.image}`;
                res.json(movie)
            });
        }
    })

};


module.exports = { index, show };