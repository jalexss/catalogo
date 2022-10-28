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

  const [ isLoading, setIsLoading ] = useState(false);
  const [comments, setComments] = useState(baseComments);

  const handleCommentsUpdate = async() => {

    const { data } = await comentariosApi.get<IComments[]>(`/comments/${championId}`);
    setComments(data);
    setIsLoading(false);
  } 
  return (
    <>
      <CreateComment 
        isLoading={isLoading}
        isLoadingActive={setIsLoading} 
        championId={championId} 
        onCommentsUpdate={handleCommentsUpdate} 
      />
      <Comments isLoading={isLoading} comments={comments} />
    </>
  )
}
