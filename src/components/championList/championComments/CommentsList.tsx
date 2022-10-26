import { FC } from "react";
import { Box, Divider, Typography } from "@mui/material"
import { IComments } from "../../../interfaces";
import moment from "moment"

interface Props {
  comment: IComments;
}

export const CommentsList:FC<Props> = ({ comment }) => {

  const DateFormated = moment(comment.createdAt).fromNow();

  return (
    <Box 
      sx={{
        pt: 2,
        pb: 1,
        px: 2,
        my: 2,
        backgroundColor: 'secondary.dark', 
        borderRadius: '10px',
      }}
    >
      <Typography component="h5" variant="h6" color="primary">{comment.username} dijo...</Typography>
      <Divider sx={{ mb: 1}}/>
      <Typography component="p" variant="body1">{comment.comment}</Typography>
      <Typography align="right" component="p" variant="overline">{DateFormated}</Typography>
    </Box>
  )
}
