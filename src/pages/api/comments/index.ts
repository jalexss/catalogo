import type { NextApiRequest, NextApiResponse } from 'next'
import { IComments, IComment } from '../../../interfaces';
import { db } from '../../../database';
import { Comment } from '../../../models';

type Data = 
  | { message: string, ok?: boolean }
  | IComments[]
  | IComment

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch( req.method ) {
    case 'POST':
      return createCommentInChampion(req, res);

    default: 
      return res.status(400).json({
        message: 'Bad request'
      })
  }
}

const createCommentInChampion = async( req: NextApiRequest, res: NextApiResponse<Data>) => {

  const { comment, username, email, championId } = req.body;

  const newComment = new Comment({
    championId,
    comment, 
    username, 
    email,
  })

  try{

    await db.connect();
    await newComment.save();
    await db.disconnect();

    return res.status(201).json({ message: 'Comentario creado!', ok: true });
  } catch( error ) {
    
    await db.disconnect();
    console.log(error);
    
    return res.status(500).json({ message: 'algo salio mal, revisar consola del servidor', ok: false });
  }
}
