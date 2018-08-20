import { SayHelloQueryArgs } from "../../../types/graphql";

const resolvers = {
    Query: {
        sayHello: (_, args:SayHelloQueryArgs) : String => {
            return `hello ${args.name}`;
        }
    }
}

export default resolvers;