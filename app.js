const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const gradeRoutes = require('./routes/gradeRoutes');
const eventRoutes = require('./routes/eventRoutes');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

// middlewares

app.use(express.json());
app.use(morgan('dev'));
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(cookieParser());

// routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/grade', gradeRoutes);
app.use('/api/v1/events', eventRoutes);

// global error handler
app.use(globalErrorHandler);

module.exports = app;
