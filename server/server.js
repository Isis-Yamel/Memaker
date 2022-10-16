import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schemas/type-defs.js';
import { resolvers } from './schemas/resolvers.js';

const server = new ApolloServer({typeDefs, resolvers})
const { url } = await server.listen({port: 9000}) //listen returns a promise
console.log(`Listening from ${url}`);