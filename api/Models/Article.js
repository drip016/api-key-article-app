const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    author: {
      type: String,
    },
    image: {
      type: String,
    },
    comments: [
      {
        comment: String,
      },
    ],
    likes: {
      type: Array,
      default: [],
    },
    dislikes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Article = mongoose.model('article', articleSchema);

module.exports = Article;
