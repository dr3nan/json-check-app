import express from 'express';
import { checkSchemaHandler } from './routes/checkSchema';

const app = express();
const PORT = 3000;

app.use(express.json());
app.post('/checkSchema', checkSchemaHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});