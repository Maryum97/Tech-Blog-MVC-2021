// Dependencies
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Get post by id, onto page
router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: Comment,
                    attributes: ['id', 'text', 'post_id', 'user_id'],
                    include: {
                        model: User,
                        attributes: ['name']
                    }
                },
                {
                    model: User,
                    attributes: ['name']
                }
            ]
        })

        // if no post by that id exists, return an error
        if (!postData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
    }

    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// Render the dashboard page, only for a logged in user
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll(req.session.user_id, {
            include: [
                {
                    model: Comment,
                    attributes: ['id', 'text', 'post_id', 'user_id'],
                    include: {
                        model: User,
                        attributes: ['name']
                    }
                },
                {
                    model: User,
                    attributes: ['name']
                }
            ]
        })

        // serialize data before passing to template
        const posts = postData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
    }

    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// Edit a post
router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: Comment,
                    attributes: ['id', 'text', 'post_id', 'user_id'],
                    include: {
                        model: User,
                        attributes: ['name']
                    }
                },
                {
                    model: User,
                    attributes: ['name']
                }
            ]
        })

        // if no post by that id exists, return an error
        if (!postData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
    }

    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;