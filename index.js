const express = require("express");
const routerApi = require("./routes")
const { boomErrorHandler, errorHandler, logErrors } = require("./middlewares/error.handler")
const cors = require('cors')
const options = require('./configs/cors.configs')

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json())
app.use(cors(options))
routerApi(app)
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT)
