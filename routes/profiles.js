const express = require('express');

const router = express.Router();

//GET api/profiles to get all user's profiles, private access
router.get('/', (req, res) => {
    res.send('Get profiles');
});

//POST api/profiles to add new profile, private access
router.post('/', (req, res) => {
    res.send('Add profile');
});

//PUT api/profiles/:id to update profile, private access
router.put('/:id', (req, res) => {
    res.send('Update profile');
});

//DELETE api/profiles/:id to delete profile, private access
router.delete('/:id', (req, res) => {
    res.send('Delete profile');
});


module.exports = router;