import { model, Schema } from 'mongoose'

const userSchema = new Schema(
  {
    id: { type: String },
    name: { type: String },
    birthDate: { type: Date },
    password: { type: String },
  },
  {
    timestamps: true,
  },
)

export const UserModel = model('User', userSchema)
