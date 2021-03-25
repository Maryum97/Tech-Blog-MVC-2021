// Dependencies
const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a new post
router.post('/', withAuth, async (req, res) => {
    try {

    }

    catch (err) {
        
    }
})

// Delete an existing post, by specific id
router.delete('/:id', withAuth, async (req, res) => {
    try {

    }

    catch (err) {

    }
})

// Export this router
module.exports = router;