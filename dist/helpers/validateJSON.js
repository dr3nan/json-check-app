"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ajv_1 = __importDefault(require("ajv"));
function validateJSON(data) {
    const ajv = new ajv_1.default();
    const validate = ajv.compile(schema);
    const valid = validate(data);
    if (!valid) {
        console.error('Invalid JSON schema:', validate.errors);
        return false;
    }
    return true;
}
exports.default = validateJSON;
//# sourceMappingURL=validateJSON.js.map