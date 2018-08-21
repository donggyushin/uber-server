import {ConnectionOptions} from "typeorm"


console.log(process.env.DB_ENDPOINT)
console.log(process.env.DB_USERNAME);
console.log(process.env.DB_PASSWORD);

const defaultConnectionOptions : ConnectionOptions = {
    type: "postgres",
    database: "uber",
    synchronize: true,
    logging: true,
    entities: [
        "entities/**/*.*"
    ],
    host: process.env.DB_ENDPOINT,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
}

export default defaultConnectionOptions;