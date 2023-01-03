"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("./config/config");
const User_1 = require("./entities/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: config_1.config.dbHost,
    port: config_1.config.dbPort,
    username: config_1.config.dbUser,
    password: config_1.config.dbPassword,
    database: config_1.config.dbName,
    entities: [User_1.User],
    logging: true,
    synchronize: true
});
