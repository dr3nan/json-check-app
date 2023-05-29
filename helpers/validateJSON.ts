import Ajv, { ValidateFunction } from 'ajv';
import { JSONResponse } from '../types/types';
import schema from '../schema/jsonSchema';

function validateJSON(data: any): data is JSONResponse {
  console.log('data arriving to validateJSON:', { data });

  const ajv = new Ajv();
  const validate: ValidateFunction = ajv.compile(schema);
  const valid: boolean | PromiseLike<any> = validate(data);

  if (!valid) {
    console.error('Invalid JSON schema:', validate.errors);
    return false;
  }

  return true;
}

export default validateJSON;