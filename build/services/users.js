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
exports.userDeleteService = exports.userUpdateService = exports.userGetByIdService = exports.userGetService = exports.userCreateService = void 0;
const User_1 = require("../entities/User");
const userCreateService = (firstname, lastname) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new User_1.User();
    user.firstname = firstname;
    user.lastname = lastname;
    return yield user.save();
});
exports.userCreateService = userCreateService;
const userGetService = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield User_1.User.find();
});
exports.userGetService = userGetService;
const userGetByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield User_1.User.findOneBy({ id });
});
exports.userGetByIdService = userGetByIdService;
const userUpdateService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield User_1.User.update({ id }, data);
});
exports.userUpdateService = userUpdateService;
const userDeleteService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield User_1.User.delete({ id });
});
exports.userDeleteService = userDeleteService;
