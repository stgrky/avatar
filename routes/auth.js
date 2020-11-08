const express = require('express');

const router = express.Router();

//GET api/auth to get a logged in user, private access
router.get('/', (req, res) => {
    res.send('Get logged in user');
});

//POST api/auth authorize user and get token, public access
router.post('/', (req, res) => {
    res.send('Log in user');
});

module.exports = router;