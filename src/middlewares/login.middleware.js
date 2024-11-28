const getUser = require("../utils/getUser");

const loginFunction = async (req, res, next) => {
    try {
        await getUser(req)

        next()

    } catch (err) {
        return res.status(401).json({ error: err.message });
    }
}

module.exports = loginFunction