import {MemeData} from '../memeData.js';

export const resolvers = {
  Query: {
    memes: () => MemeData
  }
};