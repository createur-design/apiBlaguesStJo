const app = require("express")();
const port = 3000;

const cors = require("cors");
app.use(cors());

const router = require("./routes");

app.use("/api/v1", router);

app.listen(port, console.log("server is runnning..."));
