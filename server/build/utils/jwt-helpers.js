"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function jwtTokens(id, email, name) {
    const user = { id, email, name };
    const accessToken = jsonwebtoken_1.default.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
    const refreshToken = jsonwebtoken_1.default.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '365d' });
    return { accessToken, refreshToken };
}
// export { jwtTokens }
exports.default = jwtTokens;
//# sourceMappingURL=jwt-helpers.js.map