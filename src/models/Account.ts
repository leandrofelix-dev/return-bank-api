import { model, Schema } from 'mongoose'

const accountSchema = new Schema(
  {
    id: { type: String },
    type: { type: String },
    userId: { type: String },
    cashReal: { type: Number },
    cashDollar: { type: Number }
  },
  {
    timestamps: true,
  },
)

export const UserModel = model('Account', accountSchema)
