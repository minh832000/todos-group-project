"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user"));
const collection_1 = __importDefault(require("./collection"));
const task_1 = __importDefault(require("./task"));
const auth_1 = __importDefault(require("./auth"));
function route(app) {
    app.use('/', auth_1.default);
    app.use('/users', user_1.default);
    app.use('/collections', collection_1.default);
    app.use('/tasks', task_1.default);
}
exports.default = route;
//# sourceMappingURL=index.js.map