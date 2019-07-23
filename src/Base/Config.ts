import _ from "lodash";

export default class Config {

    static environments = {
        development: {
            mysql: {
                database: 'api',
                host: 'mysql',
                logging: true,
                password: 'password',
                port: 3306,
                synchronize: true,
                type: 'mysql',
                username: 'root',
            }
        }
    }

    public static get(key: any[] | string) {
        const env = _.get(this.environments, process.env.NODE_ENV);
        return _.get(env, key);
    }
}