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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class TaskController {
    showAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tasks = yield prisma.task.findMany();
                res.status(200).json(tasks);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nameTask, collectionId, deadline, description } = req.body;
                const task = yield prisma.task.create({
                    data: {
                        nameTask: nameTask,
                        collectionId: collectionId,
                        deadline: deadline,
                        description: description
                    },
                });
                res.status(200).json(task);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const taskId = +req.params.id;
                // delete collection before delete user
                const deletedTask = yield prisma.task.delete({
                    where: {
                        id: taskId,
                    },
                });
                res.status(200).json(deletedTask);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
}
exports.default = new TaskController();
//# sourceMappingURL=TaskController.js.map