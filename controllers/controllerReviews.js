const connection = require('../data/db');

function store(req, res) {
    const addSql = "INSERT INTO `reviews` (`movie_id`, `name`, `vote`, `text`) VALUES (?, ?, ?, ?)";
    const { movie_id, name, vote, text } = req.body;

    connection.query(addSql, [movie_id, name.trim(), vote, text.trim()], (err, _) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });

        res.status(201)
    })
}

function destroy(req, res) {
    const removeSql = 'DELETE FROM `db_movies`.`reviews` WHERE (`id` = ?);'
    const { id } = req.params

    connection.query(removeSql, [id], (err, _) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });

        res.status(204)
    })
}


module.exports = { store, destroy };