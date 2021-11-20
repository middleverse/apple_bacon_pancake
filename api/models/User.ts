import { getModelForClass, prop } from "@typegoose/typegoose";

class UserClass {
    @prop()
    public username: string;

    @prop()
    public email: string; //@todo change to email address scalar type

    @prop()
    password: string;
}

export const UserModel = getModelForClass(UserClass);