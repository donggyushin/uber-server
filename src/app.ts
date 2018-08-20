import {GraphQLServer} from "graphql-yoga";
import cors from "cors";
import helmet from "helmet";
import logger from "morgan";

class App {
    public app: GraphQLServer;
    public constructor(){
        this.app = new GraphQLServer({
            //options...
            
        });
        this.middlewares();
    }
    private middlewares = () : void => {
        this.app.express.use(cors())
        this.app.express.use(helmet())
        this.app.express.use(logger("dev"))

    }
}

export default new App().app;