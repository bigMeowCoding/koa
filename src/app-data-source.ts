import { DataSource } from "typeorm";
import { Book } from "./entity/book";
import { User } from "./entity/user";

const appDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "123456",
  database: "test",
  entities: [Book, User],
});
export default appDataSource;
