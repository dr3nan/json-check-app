"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const checkSchema_1 = require("./routes/checkSchema");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.post('/checkSchema', checkSchema_1.checkSchemaHandler);
// Example usage
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map