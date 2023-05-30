"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSchemaHandler = exports.handleJSON = void 0;
const fs_1 = __importDefault(require("fs"));
// import validateJSON from '../helpers/validateJSON';
const removeDuplicates_1 = __importDefault(require("../helpers/removeDuplicates"));
const path_1 = __importDefault(require("path"));
function handleJSON(json) {
    let errorLog = [];
    try {
        const data = JSON.parse(json);
        // console.log('type of data ===>', typeof data, 'data ===>', {data});
        // pending verify what props are required and field types, to activate JSON validation
        // if (!validateJSON(data)) {
        //   throw new Error('Invalid JSON');
        // }
        const { cleanedResponse, objectDuplicates, sceneDuplicates } = (0, removeDuplicates_1.default)(data);
        return { cleanedData: cleanedResponse, objectDuplicates, sceneDuplicates, errorLog };
    }
    catch (error) {
        console.error('Invalid JSON format:', error);
        errorLog.push('Invalid JSON format');
        return { objectDuplicates: [], sceneDuplicates: [], errorLog };
    }
}
exports.handleJSON = handleJSON;
;
function checkSchemaHandler(req, res) {
    const { cleanedData, objectDuplicates, sceneDuplicates, errorLog } = handleJSON(JSON.stringify(req.body.data));
    if (cleanedData) {
        const cleanedJSON = JSON.stringify(cleanedData, null, 2);
        const fileName = 'clean_application.json';
        const filePath = path_1.default.join(__dirname, `../clean_json/${fileName}`);
        try {
            fs_1.default.writeFileSync(filePath, cleanedJSON, { flag: 'w' });
            console.log('File successfully written:', filePath);
            res.json({
                success: true,
                cleanedData,
                objectDuplicates,
                sceneDuplicates,
                errorLog,
            });
        }
        catch (error) {
            console.error('Error writing file:', error);
            res.json({
                success: false,
                objectDuplicates,
                sceneDuplicates,
                errorLog: ['Error writing file'],
            });
        }
    }
    else {
        res.json({
            success: false,
            objectDuplicates,
            sceneDuplicates,
            errorLog,
        });
    }
}
exports.checkSchemaHandler = checkSchemaHandler;
;
