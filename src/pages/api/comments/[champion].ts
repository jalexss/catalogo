import type { NextApiRequest, NextApiResponse } from 'next'
import { IComments, IComment } from '../../../interfaces';
import { db } from '../../../database';
import { Comment } from '../../../models';

type Data = 
  | { message: string, ok?: boolean }
  | IComments[]
  | IComment

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch( req.method ) {
    case 'GET':
      return getCommentsInChampion(req, res);

    default: 
      return res.status(400).json({
        message: 'Bad request'
      })
  }
}

const getCommentsInChampion = async ( req: NextApiRequest, res: NextApiResponse<Data> ) => {
  
  const { champion } = req.query;

  await db.connect();
  const comments = await Comment.find({ "championId": champion }).sort({ createdAt: 'descending' }).lean();
  await db.disconnect();

  return res.status(200).json(comments);
}
