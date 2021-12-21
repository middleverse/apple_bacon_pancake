// import { getModelForClass, prop } from "@typegoose/typegoose";

// class UserClass {
//     @prop()
//     public username: string;

//     @prop()
//     public email: string; //@todo change to email address scalar type

//     @prop()
//     password: string;
// }

// export const UserModel = getModelForClass(UserClass);

import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class User {
  @Field()
  readonly _id: ObjectId;

  @Field()
  @Property({ required: true })
  email: string;

  @Property({ required: true })
  password: string;
}

export const UserModel = getModelForClass(User);
