import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: '16kb' })); //for middleware
app.use(express.urlencoded({ extended: true, limit: '16kb' })); //for url understanding (ex: it uses + % etc)
app.use(express.static('public'));
app.use(cookieParser());

//routes import
import userRouter from './routes/user.routes.js';

//routes declaration
app.use('/api/v1/users', userRouter);

//http://localhost:8000/api/users/register

export { app };
