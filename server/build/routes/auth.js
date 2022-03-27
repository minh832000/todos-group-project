"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthController_1 = __importDefault(require("./../controllers/AuthController"));
const express_1 = __importDefault(require("express"));
const middleware_1 = __importDefault(require("./../middleware/middleware"));
const route = express_1.default.Router();
// [POST] register
route.post('/register', AuthController_1.default.registerUser);
// [POST] login
route.post('/login', AuthController_1.default.loginUser);
// [POST] refresh
route.post('/refresh', AuthController_1.default.refreshToken);
// [POST] logout
route.post('/logout', middleware_1.default.verifyToken, AuthController_1.default.logout);
exports.default = route;
//# sourceMappingURL=auth.js.map