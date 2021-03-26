// Dependencies
const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        // Get all projects and JOIN with user data
        // const postData = await Post.findAll({
        //     include: [
        //         {
        //             model: User,
        //             attributes: ['name']
        //         },
        //     ],
        // });

        // Serialize data so the template can read it
        // const projects = projectData.map((project) => project.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('homepage', {
            // posts,
            // logged_in: req.session.logged_in
        });
    }

    catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => { // find post by pk

})

router.get('/dashboard', async (req, res) => {

})

router.get('/login', async (req, res) => {

})

router.get('/signup', async (req, res) => {

})

module.exports = router;