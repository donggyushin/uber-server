import { Options } from "graphql-yoga";
import app from "./app"

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

app.start(appOptions, handleAppStart);