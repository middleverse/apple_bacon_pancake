import { InputType, Field } from "type-graphql";

import { ObjectId } from "mongodb";
import { Task } from "../models/Task";

@InputType()
export class TaskInput implements Partial<Task> {
  @Field({ nullable: true })
  id?: ObjectId;

  @Field({ nullable: true })
  description?: string;

  @Field()
  done: boolean;

  @Field()
  archived: boolean;
}
