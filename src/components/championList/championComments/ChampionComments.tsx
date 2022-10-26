import { FC } from "react"

import { CreateComment, Comments } from "./";
import { IComments } from "../../../interfaces";

interface Props {
  championId: string;
  comments: IComments[];
}

export const ChampionComments:FC<Props> = ({ championId, comments }) => {
  return (
    <>
      <CreateComment championId={championId} />
      <Comments comments={comments} />
    </>
  )
}
