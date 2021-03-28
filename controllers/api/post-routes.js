// Dependencies
const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a new post
router.post('/', withAuth, async (req, res) => {
    try {
        console.log(req.body);
        req.body.description = req.body.post_text;
        const postData = await Post.create({
            ...req.body,
            name: req.body.name,
            user_id: req.session.user_id,
        });

        res.status(200).json(postData);
    }

    catch (err) {
        res.status(400).json(err);
    }
})

// Delete an existing post, by specific id
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
          }
      
          res.status(200).json(postData);
    }

    catch (err) {
        res.status(500).json(err);
    }
})

// Export this router
module.exports = router;