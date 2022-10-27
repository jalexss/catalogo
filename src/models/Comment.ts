import mongoose, { Model, Schema } from 'mongoose'
import { IComments } from '../interfaces';


const commentSchema = new Schema({
  championId: { type: String, required: true },
  comment: { type: String, required: true },
  username: {type: String, required: true },
  email: { type: String, required: true },
}, {
  timestamps: true
});


const CommentModel: Model<IComments> = mongoose.models.Comment || mongoose.model('Comment', commentSchema );

export default CommentModel;