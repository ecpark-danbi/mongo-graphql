import { Document, Model, Schema, model } from "mongoose";

export const UserSchema = new Schema<UserDocument, UserModel>({
  name: {
    type: String,
    required: true,
  }
})

export interface UserDocument extends Document {
  name: string;
}

export type UserModel = Model<UserDocument>;

export const User = model<UserDocument, UserModel>("User", UserSchema);
