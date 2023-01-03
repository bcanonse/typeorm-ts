"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    port: (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    dbHost: process.env.DB_HOST,
    dbPort: parseInt((_b = process.env.DB_PORT) !== null && _b !== void 0 ? _b : '5432')
};
