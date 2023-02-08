import { model, Schema } from 'mongoose'
import { User } from '../entities/User.class'

const accountSchema = new Schema(
  {
    id: { type: String },
    owner: { type: String },
    type: { type: String },
    cash: { type: Number }
  },
  {
    timestamps: true,
  },
)

export const accountModel = model('Account', accountSchema)
