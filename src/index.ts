import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello from Node.js + TypeScript! SonarQube loves us ❤️' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
