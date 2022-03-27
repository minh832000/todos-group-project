"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_helpers_1 = __importDefault(require("../utils/jwt-helpers"));
const prisma = new client_1.PrismaClient();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthController {
    registerUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, passWord, name } = req.body;
                const hashedPassword = yield bcrypt_1.default.hash(passWord, 10);
                const user = yield prisma.user.create({
                    data: {
                        email: email,
                        passWord: hashedPassword,
                        name: name,
                    },
                });
                res.status(200).json(user);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
    loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                // Check email
                const user = yield prisma.user.findUnique({
                    where: {
                        email: email,
                    },
                });
                if (!user) {
                    return res.status(401).json({ error: "Email is incorrect!" });
                }
                // Check password
                const validPassword = yield bcrypt_1.default.compare(password, user.passWord);
                if (!validPassword) {
                    return res.status(401).json({ error: "Password is incorrect!" });
                }
                // JWT
                let tokens = (0, jwt_helpers_1.default)(user.id, user.email, user.name);
                res.cookie("refreshToken", tokens.refreshToken, { httpOnly: true });
                res.json(tokens);
            }
            catch (error) {
                res.status(401).json({ error: error });
            }
        });
    }
    refreshToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // get refreshToken 
            const refreshToken = req.cookies.refreshToken;
            if (!refreshToken)
                return res.status(401).json("You're not authenticated");
            jsonwebtoken_1.default.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                if (err)
                    return res.status(401).json();
                let tokens = (0, jwt_helpers_1.default)(user.id, user.email, user.name);
                res.cookie("refreshToken", tokens.refreshToken, { httpOnly: true });
                return res.status(200).json({ accessToken: tokens.accessToken });
            });
        });
    }
    logout(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.clearCookie("refreshToken");
            res.status(200).json("Loggout successfully!");
        });
    }
}
exports.default = new AuthController();
//# sourceMappingURL=AuthController.js.map