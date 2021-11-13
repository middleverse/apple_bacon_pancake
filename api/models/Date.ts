import { getModelForClass, mongoose, prop } from "@typegoose/typegoose";

type ActivitySchema = {
  activity_id: string;
  is_done: boolean;
};

type ActivityContainerSchema = {
  date: Date;
  activities: ActivitySchema[];
};

class DateClass {
  @prop()
  _id: string;

  @prop({ required: true, default: [] })
  public activity!: mongoose.Types.Array<ActivityContainerSchema>;
}

export const DateModel = getModelForClass(DateClass);
