import { Database } from "fakebase";

const db = new Database('./data');

export const Memes = db.table('memes');