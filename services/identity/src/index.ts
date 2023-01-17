import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

interface IIdentity {
  id: string;
  email: string;
}

let identity: IIdentity[] = [];

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
    getIdentity: (parent: any, args: Omit<IIdentity, "email">) =>
      identity.find((user) => user.id === args.id),
    getIdentityList: () => identity,
  },
  Mutation: {
    addIdentity(parent: any, args: Omit<IIdentity, "id">) {
      identity.push({
        email: args.email,
        id: Math.floor(Date.now() * Math.random()).toString(),
      });

      return identity[identity.length - 1];
    },
    updateIdentity(_: never, { identity: { email, id } }: { identity: IIdentity }) {
      const updateIdentity = identity.map((user) => (user.id === id ? { id, email } : user));

      identity = updateIdentity;

      return identity.find((user) => user.id === id);
    },
    deleteIdentity(_: never, { id }: Omit<IIdentity, "email">) {
      const identityUpdate = identity.filter((user) => user.id !== id);
      const deletedIdentity = identity.find((user) => user.id === id);

      identity = identityUpdate;

      return deletedIdentity;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

(async () =>
  await startStandaloneServer(server, {
    listen: { port: 3000 },
  }))();
