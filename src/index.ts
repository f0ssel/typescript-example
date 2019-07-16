import alias from 'module-alias';
alias.addAliases({
    '@src'  : __dirname,
});
import 'reflect-metadata';

import { createExpressServer } from 'routing-controllers';
import { Container } from 'typedi';
import * as TypeORM from 'typeorm';

TypeORM.useContainer(Container);

async function main() {
    console.log(__dirname);
    await TypeORM.createConnection({
        database: 'api',
        entities: [
            __dirname + '/**/*.ENT.**',
         ],
        host: 'localhost',
        logging: true,
        password: 'password',
        port: 3306,
        synchronize: true,
        type: 'mysql',
        username: 'root',
    });
    console.log('Database connection established');

    createExpressServer({
        controllers: [__dirname + '/**/*.CTL.*'],
        defaults: {
            paramOptions: {
                required: true,
            },
        },
    }).listen(3000);
    console.log('Listening on port 3000');
}

main();
