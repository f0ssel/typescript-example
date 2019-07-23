import alias from 'module-alias';
alias.addAliases({
    '@src'  : __dirname,
});
import 'reflect-metadata';

import Config from '@src/Base/Config';
import { createExpressServer } from 'routing-controllers';
import { Container } from 'typedi';
import * as TypeORM from 'typeorm';

TypeORM.useContainer(Container);

async function main() {
    await TypeORM.createConnection({
        ...Config.get('mysql'),
        entities: [
            __dirname + '/**/*.ENT.**',
         ],
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
