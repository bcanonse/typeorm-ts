"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: '172.17.0.1',
    port: 5435,
    username: 'ts',
    password: 'ts',
    database: 'ts',
    entities: [],
    logging: true
});
