"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    connection: {
        client: 'postgres',
        connection: {
            host: '127.0.0.1',
            port: 5432,
            database: 'portfolio-strapi-db',
            user: 'postgres',
            password: 'docker',
            ssl: false,
        },
    },
});
