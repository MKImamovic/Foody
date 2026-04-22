import express from 'express';
import authRoutes from './routes/authRoutes.js';
import foodyRoutes from './routes/foodyRoutes.js';
import authMiddleware from './middleware/authMiddleware.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 6969;
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());


app.use("/auth", authRoutes);
app.use("/foody",authMiddleware, foodyRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
