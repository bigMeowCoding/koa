import Router from "@koa/router";
import BookController from "./controller/book";
import UserController from "./controller/user";

const router = new Router();
router.post("/test", (context: any) => {
  context.body = { code: 0 };
});
router.post("/hello", (context: any) => {
  context.body = { code: 0, data: "hello" };
});
// router.get("/book", BookController.getBooks);
// router.get("/book/:id", BookController.getBook);
//
// router.get("/userS", UserController.getUsers);

export default router;
