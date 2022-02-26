const app = require("./index");
const connect = require("./configs/db");
let PORT = process.env.PORT|| 3600;
app.listen(PORT, async function () {
  try {
    await connect();
    console.log("listening on port 3600");
  } catch (err) {
    console.log(err);
  }
});
