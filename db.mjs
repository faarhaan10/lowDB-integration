import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const db = new Low(new JSONFile("./users.json"));
await db.read();
// await db.write();
db.data ||= { posts: [], users: [] }; // For Node >= 15.x

export const postCollection = db.data.posts;
export const userCollection = db.data.users;
export const save = async () => await db.write();
