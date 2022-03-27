"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TaskController_1 = __importDefault(require("./../controllers/TaskController"));
const middleware_1 = __importDefault(require("./../middleware/middleware"));
const route = express_1.default.Router();
// [GET] tasks/
route.get("/", middleware_1.default.verifyToken, TaskController_1.default.showAll);
// [POST] tasks/store
route.post("/store", middleware_1.default.verifyToken, TaskController_1.default.store);
// [DELETE] tasks/:id
route.delete("/:id", middleware_1.default.verifyToken, TaskController_1.default.delete);
exports.default = route;
//# sourceMappingURL=task.js.map