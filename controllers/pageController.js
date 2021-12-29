const Post = require('../models/Post');

exports.getAbout = (req, res) => {
  res.render('about');
};

exports.getEdit = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  res.render('edit', {
    post,
  });
};

exports.getAddPost = (req, res) => {
  res.render('add_post');
};
