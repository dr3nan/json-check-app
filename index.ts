import express from 'express';
import { checkSchemaHandler } from './routes/checkSchema';

const app = express();
const port = 3000;

app.use(express.json());
app.post('/checkSchema', checkSchemaHandler);

// Example usage
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});