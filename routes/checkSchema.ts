import fs from 'fs';
import { JSONResponse, ObjectItem, Scene } from '../types/types';
import { Request, Response } from 'express';
// import validateJSON from '../helpers/validateJSON';
import removeDuplicates from '../helpers/removeDuplicates';
import path from 'path';

function handleJSON(json: string): { cleanedData?: JSONResponse; objectDuplicates: ObjectItem[]; sceneDuplicates: Scene[]; errorLog: string[] } {
  let errorLog: string[] = [];

  try {
    const data = JSON.parse(json);

    // if (!validateJSON(data)) {
    //   throw new Error('Invalid JSON');
    // }

    const { cleanedResponse, objectDuplicates, sceneDuplicates } = removeDuplicates(data);
    return { cleanedData: cleanedResponse, objectDuplicates, sceneDuplicates, errorLog };
  } catch (error) {
    console.error('Invalid JSON format:', error);
    errorLog.push('Invalid JSON format');
    return { objectDuplicates: [], sceneDuplicates: [], errorLog };
  }
}

export function checkSchemaHandler(req: Request, res: Response) {
  const { cleanedData, objectDuplicates, sceneDuplicates, errorLog } = handleJSON(JSON.stringify(req.body));

  if (cleanedData) {
    const cleanedJSON = JSON.stringify(cleanedData, null, 2);
    const fileName = 'clean_application.json';
    const filePath = path.join(__dirname, `../clean_json/${fileName}`);

    try {
      fs.writeFileSync(filePath, cleanedJSON, { flag: 'w' });
      console.log('File successfully written:', filePath);

      res.json({
        success: true,
        cleanedData,
        objectDuplicates,
        sceneDuplicates,
        errorLog,
      });
    } catch (error) {
      console.error('Error writing file:', error);

      res.json({
        success: false,
        objectDuplicates,
        sceneDuplicates,
        errorLog: ['Error writing file'],
      });
    }
  } else {
    res.json({
      success: false,
      objectDuplicates,
      sceneDuplicates,
      errorLog,
    });
  }
};