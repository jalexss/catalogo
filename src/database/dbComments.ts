import { db } from ".";
import { Comment } from "../models";

export const getCommentsByChampion = async(name: string) => {

  await db.connect();
  const comments = await Comment.find({ "championId": name }).sort({ createdAt: 'descending' }).lean();
  await db.disconnect();

  return JSON.parse( JSON.stringify(comments) );
}