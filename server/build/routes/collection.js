"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CollectionController_1 = __importDefault(require("./../controllers/CollectionController"));
const middleware_1 = __importDefault(require("./../middleware/middleware"));
const route = express_1.default.Router();
// [GET] collections/
route.get("/", middleware_1.default.verifyToken, CollectionController_1.default.showAll);
// [POST] collections/store
route.post("/store", middleware_1.default.verifyToken, CollectionController_1.default.store);
// [DELETE] collections/:id
route.delete("/:id", middleware_1.default.verifyToken, CollectionController_1.default.delete);
exports.default = route;
//# sourceMappingURL=collection.js.map