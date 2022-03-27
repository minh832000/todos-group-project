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
const prisma = new client_1.PrismaClient();
class UserController {
    showAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield prisma.user.findMany({
                    include: {
                        collections: true,
                    },
                });
                res.status(200).json(users);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
    showUnique(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = +req.params.id;
                const user = yield prisma.user.findUnique({
                    where: {
                        id: userId,
                    },
                });
                res.status(200).json(user);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = +req.params.id;
                // delete collection before delete user
                const deletedCollection = yield prisma.collection.deleteMany({
                    where: {
                        userId: userId,
                    },
                });
                const deletedUser = yield prisma.user.delete({
                    where: {
                        id: userId,
                    },
                });
                res.status(200).json(deletedUser);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
    updateNameUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userName } = req.body;
                const userId = +req.params.id;
                const user = yield prisma.user.update({
                    where: {
                        id: userId,
                    },
                    data: {
                        name: userName
                    }
                });
                res.status(200).json(user);
            }
            catch (error) {
                return res.status(500).json({ error: error });
            }
        });
    }
    updateEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userEmail } = req.body;
                const userId = +req.params.id;
                const listUserEmail = [];
                var userEmails = yield prisma.user.findMany({
                    select: {
                        email: true,
                    }
                });
                userEmails.forEach(userEmail => {
                    listUserEmail.push(userEmail.email);
                });
                if (listUserEmail.includes(userEmail)) {
                    res.status(400).json("Email must be unique");
                }
                else {
                    const user = yield prisma.user.update({
                        where: {
                            id: userId,
                        },
                        data: {
                            email: userEmail
                        }
                    });
                    res.status(200).json(user);
                }
            }
            catch (error) {
                return res.status(500).json({ error: error });
            }
        });
    }
    updatePassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userPassword } = req.body;
                const userId = +req.params.id;
                const user = yield prisma.user.update({
                    where: {
                        id: userId,
                    },
                    data: {
                        passWord: yield bcrypt_1.default.hash(userPassword, 10)
                    }
                });
                res.status(200).json(user);
            }
            catch (error) {
                return res.status(500).json({ error: error });
            }
        });
    }
}
exports.default = new UserController;
//# sourceMappingURL=UserController.js.map