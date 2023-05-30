import Ajv from 'ajv';
import { JSONResponse } from '../types/types';
import schema from '../schema/jsonSchema';

function validateJSON(data: any): data is JSONResponse {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const valid: boolean | PromiseLike<any> = validate(data);

  if (!valid) {
    console.error('Invalid JSON schema:', validate.errors);
    return false;
  }

  return true;
}

export default validateJSON;