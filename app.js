const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const gradeRoutes = require('./routes/gradeRoutes');
const eventRoutes = require('./routes/eventRoutes');
const imageRoutes = require('./routes/imageRoutes');
const resultRoutes = require('./routes/resultRoutes');

const globalErrorHandler = require('./controllers/errorController');

const app = express();

// middlewares
app.use('/static/images', express.static(path.join(`${__dirname}/uploads`)));
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
app.use('/api/v1/images', imageRoutes);
app.use('/api/v1/result', resultRoutes);

// global error handler
app.use(globalErrorHandler);

module.exports = app;
