const connection = require('../data/db');

function store(req, res) {
    const addSql = "INSERT INTO `reviews` (`movie_id`, `name`, `vote`, `text`) VALUES (?, ?, ?, ?)";
    const { movie_id, name, vote, text } = req.body;

    connection.query(addSql, [movie_id, name.trim(), vote, text.trim()], (err, _) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });

        res.status(201)
    })
}


module.exports = { store };