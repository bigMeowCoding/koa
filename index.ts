import Koa from "koa";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";

import appDataSource from "./src/app-data-source";
import router from "./src/routes";

const app = new Koa();

appDataSource
  .initialize()
  .then(async () => {
    app.use(cors());
    app.use(bodyParser());
    app.use(async (ctx, next) => {
      await next();
      const rt = ctx.response.get("X-Response-Time");
      console.log(`${ctx.method} ${ctx.url} - ${rt}`);
    });

    // x-response-time
    app.use(async (ctx, next) => {
      const start = Date.now();
      await next();
      const ms = Date.now() - start;
      ctx.set("X-Response-Time", `${ms}ms`);
    });

    // response
    app.use(router.routes()).use(router.allowedMethods());

    app.listen(3000);
  })
  .catch((e) => {
    console.error("连接数据库失败", e);
  });
