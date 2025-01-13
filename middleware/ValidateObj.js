function validateObj(req, res, next) {
    const { movie_id, name, text, vote } = req.body;
    const errors = [];

    if (!movie_id) {
        errors.push('Movie ID is required');
    };
    if (!name) {
        errors.push('Name is required');
    };
    if (!text) {
        errors.push('Text is required');
    };
    if (!vote) {
        errors.push('Vote is required');
    };

    if (errors.length) {
        res.status(400);
        return res.json({
            error: 'Invalid request',
            messages: errors,
        });
    };

    next();
};

module.exports = validateObj;