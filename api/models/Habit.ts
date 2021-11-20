import { getModelForClass, prop } from "@typegoose/typegoose";

enum HabitStatus {
  "ACTIVE",
  "DELETED",
  "ARCHIVED",
}

class HabitClass {
  @prop()
  _id: string;

  @prop()
  public title: string;

  @prop()
  public creation_date: Date;

  @prop()
  public end_date: Date;

  @prop()
  public longest_streak: number;

  @prop()
  public total_active_days: number;

  @prop()
  public status: HabitStatus;
}

export const HabitModel = getModelForClass(HabitClass);
