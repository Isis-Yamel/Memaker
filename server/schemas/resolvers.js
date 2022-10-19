import { Memes } from '../db.js';

export const resolvers = {
  Query: {
    meme: (_root, { id }) => Memes.findById(id),
    memes: () => Memes.findAll()
  }
};