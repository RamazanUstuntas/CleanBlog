const express = require('express');
const mongoose = require('mongoose');
const postController = require('./controllers/postController');
const pageController = require('./controllers/pageController');
const methodOverride = require('method-override');

const app = express();

//CONNECT TO DB
mongoose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//ROUTES
app.get('/', postController.getAllPosts);
app.get('/posts/:id', postController.getPost);
app.post('/posts', postController.createPost);
app.put('/posts/:id', postController.updatePost);
app.delete('/posts/:id', postController.deletePost);
app.get('/about', pageController.getAbout);
app.get('/edit/:id', pageController.getEdit);
app.get('/add_post', pageController.getAddPost);

const port = 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
