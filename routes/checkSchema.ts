import fs from 'fs';
import { Request, Response } from 'express';
import validateJSON from '../helpers/validateJSON';
import removeDuplicates from '../helpers/removeDuplicates';
import { JSONResponse } from '../types/types';

export function handleJSON(json: string): { cleanedData?: JSONResponse; errorLog: string[] } {
  let errorLog: string[] = [];

  try {
    const data = JSON.parse(json);

    if (!validateJSON(data)) {
      throw new Error('Invalid JSON');
    }

    const cleanedData = removeDuplicates(data);
    return { cleanedData, errorLog };
  } catch (error) {
    console.error('Invalid JSON format:', error);
    errorLog.push('Invalid JSON format');
    return { errorLog };
  }
}

export function checkSchemaHandler(req: Request, res: Response) {
  const { cleanedData, errorLog } = handleJSON(req.body);

  if (cleanedData) {
    const cleanedJSON = JSON.stringify(cleanedData, null, 2);
    fs.writeFileSync('clean_application.json', cleanedJSON);
    console.log('Cleaned JSON data has been written to clean_application.json.');

    res.json({
      success: true,
      cleanedData,
      errorLog,
    });
  } else {
    res.json({
      success: false,
      errorLog,
    });
  }
}