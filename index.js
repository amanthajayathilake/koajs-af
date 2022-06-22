const Koa = require("koa");
const App = new Koa();
const parser = require("koa-bodyparser");
const cors = require("@koa/cors");
const router = require("./routes/router");
const chalk = require("chalk");

//just a console style. Ignore this :(
const portCon = chalk.bold.red;

require('dotenv').config();

App.use(parser())
    .use(cors())
    .use(router.routes());

App.listen(process.env.PORT, () => {
  console.log(portCon(`🚀 Server listening on PORT ${process.env.PORT} 🚀`));
});
