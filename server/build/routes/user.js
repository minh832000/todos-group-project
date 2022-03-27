"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("../controllers/UserController"));
const middleware_1 = __importDefault(require("../middleware/middleware"));
const route = express_1.default.Router();
// [GET] users/
route.get("/", middleware_1.default.verifyToken, UserController_1.default.showAll);
// [GET] users/:id
route.get("/:id", middleware_1.default.verifyToken, UserController_1.default.showUnique);
// [PATCH] users/:id
route.patch("/:id/name", middleware_1.default.verifyToken, UserController_1.default.updateNameUser);
route.patch("/:id/email", middleware_1.default.verifyToken, UserController_1.default.updateEmail);
route.patch("/:id/password", middleware_1.default.verifyToken, UserController_1.default.updatePassword);
// [DELETE] users/:id
route.delete("/:id", middleware_1.default.verifyToken, UserController_1.default.delete);
exports.default = route;
//# sourceMappingURL=user.js.map