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
const express_1 = require("express");
const users_1 = require("../services/users");
const router = (0, express_1.Router)();
router.post('/', (req, res) => {
    void (() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { firstname, lastname } = req.body;
            const user = yield (0, users_1.userCreateService)(firstname, lastname);
            res.json({
                message: 'User created',
                data: user
            });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }))();
});
router.get('/', (_, res) => {
    void (() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const users = yield (0, users_1.userGetService)();
            res.json({
                message: 'users retrieved',
                data: users
            });
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            }
        }
    }))();
});
router.get('/:id', (req, res) => {
    void (() => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const user = yield (0, users_1.userGetByIdService)(id);
            if (user == null)
                return res.status(404).json({ message: 'User does not exist' });
            res.json({
                message: 'user retrieved',
                data: user
            });
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            }
        }
    }))();
});
router.put('/:id', (req, res) => {
    void (() => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const data = req.body;
        try {
            const user = yield (0, users_1.userGetByIdService)(id);
            if (user == null)
                return res.sendStatus(404);
            yield (0, users_1.userUpdateService)(id, data);
            return res.sendStatus(204);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: error.message });
            }
        }
    }))();
});
router.delete('/:id', (req, res) => {
    void (() => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const result = yield (0, users_1.userDeleteService)(id);
            if (result.affected === 0) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.sendStatus(204);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: error.message });
            }
        }
    }))();
});
exports.default = router;
