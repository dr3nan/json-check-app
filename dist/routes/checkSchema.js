"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSchemaHandler = void 0;
const fs_1 = __importDefault(require("fs"));
// import validateJSON from '../helpers/validateJSON';
const removeDuplicates_1 = __importDefault(require("../helpers/removeDuplicates"));
const path_1 = __importDefault(require("path"));
function handleJSON(json) {
    console.log('object arriving to handleJSON:', json);
    let errorLog = [];
    try {
        console.log('code never goes beyond data in function handleJSON');
        const data = JSON.parse(json);
        // if (!validateJSON(data)) {
        //   throw new Error('Invalid JSON');
        // }
        const cleanedData = (0, removeDuplicates_1.default)(data);
        return { cleanedData, errorLog };
    }
    catch (error) {
        console.error('Invalid JSON format:', error);
        errorLog.push('Invalid JSON format');
        return { errorLog };
    }
}
;
function checkSchemaHandler(req, res) {
    const { cleanedData, errorLog } = handleJSON(JSON.stringify(req.body));
    if (cleanedData) {
        const cleanedJSON = JSON.stringify(cleanedData, null, 2);
        const fileName = 'clean_application.json';
        const filePath = path_1.default.join(__dirname, `../clean_json/${fileName}`);
        // const filePath = path.join(__dirname, `../clean_json/${fileName}`);
        try {
            fs_1.default.writeFileSync(filePath, cleanedJSON, { flag: 'w' });
            console.log('File successfully written:', filePath);
            res.json({
                success: true,
                cleanedData,
                errorLog,
            });
        }
        catch (error) {
            console.error('Error writing file:', error);
            res.json({
                success: false,
                errorLog: ['Error writing file'],
            });
        }
    }
    else {
        res.json({
            success: false,
            errorLog,
        });
    }
}
exports.checkSchemaHandler = checkSchemaHandler;
