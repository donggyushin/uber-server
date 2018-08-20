import { Options } from "graphql-yoga";
import {createConnection} from "typeorm"
import app from "./app"
import defaultConnectionOptions from "./ormConfig";

const PORT : number | string = process.env.PORT || 4000;
const PLAYGROUND : string = "/playground";
const GRAPHQL : string = "/graphql";
const appOptions : Options = {
    port: PORT,
    playground: PLAYGROUND,
    endpoint: GRAPHQL
}

const handleAppStart = () => {
    console.log(`Listening at ${PORT}`)
}

createConnection(defaultConnectionOptions).then(() => {
    app.start(appOptions, handleAppStart);
})

