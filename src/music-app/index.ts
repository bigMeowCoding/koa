import express from "express";
import registerRouter from "./router";

const app = express();

const PORT = 3333;

registerRouter(app);

app.listen(PORT);
// })
// .catch((e) => {
//   console.error("连接数据库失败", e);
// });
