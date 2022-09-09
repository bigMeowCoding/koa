import { Context } from "koa";
import { User } from "../entity/user";
import { Book } from "../entity/book";
import appDataSource from "../app-data-source";

export default class UserController {
  public static async getUsers(ctx: Context) {
    const users = await appDataSource.manager.find(User);
    ctx.body = users;
  }
}
