// Dependencies
const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a new post
router.post('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.create({
            title: req.body.title,
            description: req.body.description,
            user_id: req.session.user_id,
        });

        res.status(200).json(postData);
    }

    catch (err) {
        res.status(400).json(err);
    }
})

// Update an existing post, by specific id
router.put('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        if (!postData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }

        res.status(200).json(postData);
    }

    catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

// Delete an existing post, by specific id
router.delete('/delete/:id', withAuth, async (req, res) => {
    try {
        console.log(req.params.id, 'post_id');
        console.log(req.session.user_id);
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