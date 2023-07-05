// app.js
import express from 'express';
import session from 'express-session';
import cors from 'cors';
import morgan from 'morgan';
import { sequelize } from './database.js';
import { User, Post } from './models/index.js';
import userRoutes from './routes/users.js';

const app = express();

app.use(cors())
app.use(express.json()); // Middleware for parsing JSON bodies from HTTP requests
app.use(morgan())

// Session middleware
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
  })
);

app.use(userRoutes);

// Route to get all posts, with associated users
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [{ model: User, as: 'user' }],
      order: [['createdAt', 'DESC']]
    });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to create a new post
app.post('/posts', async (req, res) => {
  try {
    const post = await Post.create(req.body);

    const postWithUser = await Post.findOne({
      where: { id: post.id },
      include: [{ model: User, as: 'user' }]
    });

    res.status(201).json(postWithUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

sequelize.sync({ alter: true })
  .then(() => {
    const port = 3000;
    app.listen(port, () => {
      console.log(`App is listening on port ${port}`);
    });
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });