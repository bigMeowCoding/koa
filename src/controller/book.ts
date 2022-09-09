import { Context } from "koa";
import { User } from "../entity/user";
import { Book } from "../entity/book";
import appDataSource from "../app-data-source";

export default class BookController {
  public static async getBooks(ctx: Context) {
    const books = await appDataSource.manager.find(Book);
    ctx.body = books;
  }
}
