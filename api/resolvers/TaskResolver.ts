import {
  Resolver,
  Query,
  Mutation,
  FieldResolver,
  Ctx,
  Arg,
  Root,
  UseMiddleware,
} from "type-graphql";
import { ObjectId } from "mongodb";
import { MyContext } from "../types/MyContext";
import { User, UserModel } from "../models/User";
import { Task, TaskModel } from "../models/Task";
import { ObjectIdScalar } from "../schema/object-id.scalar";
import { TaskInput } from "../types/TaskInput";
import { isAuth } from "../middleware/isAuth";

@Resolver(() => Task)
export class TaskResolver {
  @Query(() => Task, { nullable: true })
  task(@Arg("taskId", () => ObjectIdScalar) taskId: ObjectId) {
    // 1. find a single task
    return TaskModel.findById(taskId);
  }

  @Query(() => [Task])
  @UseMiddleware(isAuth)
  tasks(@Ctx() ctx: MyContext) {
    // 2. display all tasks for the current user
    return TaskModel.find({ author: ctx.res.locals.userId });
  }

  @Mutation(() => Task)
  @UseMiddleware(isAuth)
  async addTask(
    @Arg("input") taskInput: TaskInput,
    @Ctx() ctx: MyContext
  ): Promise<Task> {
    // 3. create a new user's Task
    const task = new TaskModel({
      ...taskInput,
      author: ctx.res.locals.userId,
    } as Task);

    await task.save();

    return task;
  }

  @Mutation(() => Task)
  @UseMiddleware(isAuth)
  async editTask(
    @Arg("input") taskInput: TaskInput,
    @Ctx() ctx: MyContext
  ): Promise<Task> {
    const { id, description } = taskInput;
    const task = await TaskModel.findOneAndUpdate(
      { _id: id, author: ctx.res.locals.userId },
      {
        description,
      },
      { runValidators: true, new: true }
    );
    if (!task) {
      throw new Error("Task not found");
    }
    return task;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteTask(
    @Arg("taskId", () => ObjectIdScalar) taskId: ObjectId,
    @Ctx() ctx: MyContext
  ): Promise<Boolean | undefined> {
    const deleted = await TaskModel.findOneAndDelete({
      _id: taskId,
      author: ctx.res.locals.userId,
    });
    if (!deleted) {
      throw new Error("Task not found");
    }
    return true;
  }

  @FieldResolver()
  async author(@Root() task: Task): Promise<User | null> {
    return await UserModel.findById(task.author);
  }
}
