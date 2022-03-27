"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class middleware {
    verifyToken(req, res, next) {
        const token = req.headers.token;
        if (token) {
            const accessToken = token.split(" ")[1];
            jsonwebtoken_1.default.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
                if (err) {
                    return res.status(403).json("Token is not valid");
                }
                req.body.user = user;
                next();
            });
        }
        else {
            return res.status(401).json("You are not authenticated");
        }
    }
}
exports.default = new middleware();
//# sourceMappingURL=middleware.js.map