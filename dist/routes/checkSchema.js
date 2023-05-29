"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSchemaHandler = exports.handleJSON = void 0;
const fs_1 = __importDefault(require("fs"));
const validateJSON_1 = __importDefault(require("../helpers/validateJSON"));
const removeDuplicates_1 = __importDefault(require("../helpers/removeDuplicates"));
function handleJSON(json) {
    let errorLog = [];
    try {
        const data = JSON.parse(json);
        if (!(0, validateJSON_1.default)(data)) {
            throw new Error('Invalid JSON');
        }
        const cleanedData = (0, removeDuplicates_1.default)(data);
        return { cleanedData, errorLog };
    }
    catch (error) {
        console.error('Invalid JSON format:', error);
        errorLog.push('Invalid JSON format');
        return { errorLog };
    }
}
exports.handleJSON = handleJSON;
function checkSchemaHandler(req, res) {
    const { cleanedData, errorLog } = handleJSON(req.body);
    if (cleanedData) {
        const cleanedJSON = JSON.stringify(cleanedData, null, 2);
        fs_1.default.writeFileSync('clean_application.json', cleanedJSON);
        console.log('Cleaned JSON data has been written to clean_application.json.');
        res.json({
            success: true,
            cleanedData,
            errorLog,
        });
    }
    else {
        res.json({
            success: false,
            errorLog,
        });
    }
}
exports.checkSchemaHandler = checkSchemaHandler;
//# sourceMappingURL=checkSchema.js.map