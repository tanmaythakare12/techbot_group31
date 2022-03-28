const User = require('../post.model');

async function createpost (req, res) {
    try {
        const body = req.body;
        const user = new User(body);
        const savedUser = await user.save();

        res.status(200).json({
            message: "post uploaded successfully",
            savedUser
        });

    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
}

module.exports = {addUser};