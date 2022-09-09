import Router from "@koa/router";
import BookController from "./controller/book";
import UserController from "./controller/user";

const router = new Router();

router.get("/books", BookController.getBooks);
router.get("/userS", UserController.getUsers);

export default router;
