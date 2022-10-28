import { FC, useState } from "react"

import { CreateComment, Comments } from "./";
import { IComments } from "../../../interfaces";
//import { getCommentsByChampion } from "../../../database";
import { comentariosApi } from "../../../api";

interface Props {
  championId: string;
  comments: IComments[];
}

export const ChampionComments:FC<Props> = ({ championId, comments: baseComments }) => {

  const [comments, setComments] = useState(baseComments);

  const handleCommentsUpdate = async() => {

    const { data } = await comentariosApi.get<IComments[]>(`/comments/${championId}`);
    setComments(data);
  } 
  return (
    <>
      <CreateComment championId={championId} onCommentsUpdate={handleCommentsUpdate} />
      <Comments comments={comments} />
    </>
  )
}
