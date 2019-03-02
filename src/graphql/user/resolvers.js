const users = {
  1: {
    id: '1',
    username: 'Niico Savvy',
  },
  2: {
    id: '2',
    username: 'Ryuu Nobutaru',
  },
};

const me = users[1];

const resolvers = {
  Query: {
    user: (_, { id }) => users[id],
    me: () => me,
  },
};

export default resolvers;
