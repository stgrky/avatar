const express = require('express');

const router = express.Router();

//GET api/contacts to get all user's contacts, private access
router.get('/', (req, res) => {
    res.send('Get contacts');
});

//POST api/contacts to add new contact, private access
router.post('/', (req, res) => {
    res.send('Add contact');
});

//PUT api/contacts/:id to update contact, private access
router.put('/:id', (req, res) => {
    res.send('Update contact');
});

//DELETE api/contacts/:id to delete contact, private access
router.delete('/:id', (req, res) => {
    res.send('Delete contact');
});


module.exports = router;