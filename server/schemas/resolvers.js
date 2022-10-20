import { Memes } from '../db.js';

export const resolvers = {
  Query: {
    meme: (_root, { id }) => Memes.findById(id),
    memes: () => Memes.findAll()
  },

  Mutation: {
    createMeme: (_root, { input }) => Memes.create({ ...input }),
    deleteMeme: (_root, { id }) => Memes.delete(id),
    updateMeme: (_root, { input }) => Memes.update({ ...input}),
  }
};