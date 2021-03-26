// Dependencies
const path = require('path');
const express = require('express');
const session = require('express-session');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const routes = require('./controllers/');
// const helpers = require('./utils/helper');
const { static } = require('express');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Define the app to make use of express library
const app = express();

// Set up Port
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({
  helpers: {
    format_date: date => {
      // Format date as MM/DD/YYYY
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }
  }
});

// Initialize sessions
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Tell app to use session
app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Make use of all files in 'public' folder
app.use(express.static('public'));

// Parse and stringify data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Give server the path to the routes
app.use(routes);

// Connection to db, then to server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});