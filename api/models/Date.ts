import { getModelForClass, mongoose, prop } from "@typegoose/typegoose";

type Activity = {
  activity_id: string;
  is_done: boolean;
};

class DateClass {
  @prop()
  _id: string;

  @prop({ required: true, default: [] })
  public activity!: mongoose.Types.Array<mongoose.Types.Array<Activity>>;
}

export const DateModel = getModelForClass(DateClass);
