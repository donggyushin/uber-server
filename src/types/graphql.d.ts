export const typeDefs = ["type Query {\n  sayBye: String!\n  sayHello(name: String!): String!\n}\n"];
/* tslint:disable */

export interface Query {
  sayBye: string;
  sayHello: string;
}

export interface SayHelloQueryArgs {
  name: string;
}
