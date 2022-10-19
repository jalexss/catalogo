import mongoose, { Model, Schema } from 'mongoose'
import { ICommentsList } from '../interfaces';


const commentSchema = new Schema({
  championId: { type: String, required: true },
  comment: { type: String, required: true },
  fullname: {type: String, required: true },
  email: { type: String, required: true },
}, {
  timestamps: true
});


const CommentModel: Model<ICommentsList> = mongoose.models.Comment || mongoose.model('Comment', commentSchema );

export default CommentModel;