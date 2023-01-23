"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
let identity = [];
const typeDefs = `#graphql
  type Identity {
    id: String
    email: String
  },

  input IdentityInput {
    id: String
    email: String
  }

  type Query {
    getIdentity(id: String): Identity
    getIdentityList: [Identity]
  }

  type Mutation {
    addIdentity(email: String): Identity
    updateIdentity(identity: IdentityInput): Identity
    deleteIdentity(id: String): Identity
  }
`;
const resolvers = {
    Query: {
        getIdentity: (parent, args) => identity.find((user) => user.id === args.id),
        getIdentityList: () => identity,
    },
    Mutation: {
        addIdentity(parent, args) {
            identity.push({
                email: args.email,
                id: Math.floor(Date.now() * Math.random()).toString(),
            });
            return identity[identity.length - 1];
        },
        updateIdentity(_, { identity: { email, id } }) {
            const updateIdentity = identity.map((user) => (user.id === id ? { id, email } : user));
            identity = updateIdentity;
            return identity.find((user) => user.id === id);
        },
        deleteIdentity(_, { id }) {
            const identityUpdate = identity.filter((user) => user.id !== id);
            const deletedIdentity = identity.find((user) => user.id === id);
            identity = identityUpdate;
            return deletedIdentity;
        },
    },
};
const server = new server_1.ApolloServer({
    typeDefs,
    resolvers,
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, standalone_1.startStandaloneServer)(server, {
        listen: { port: 3000 },
    });
}))();
