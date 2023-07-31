const express = require('express');
require("dotenv").config();
const logger = require('./middleWares/logger');
const error = require('./middleWares/error');
const connectDB =  require('./data');
const path = require('path')


const UserRouter = require('./routes/user');
const Categoryrouter = require('./routes/category');
const HoolniiTsesRouter = require('./routes/hoolniiTses');
const HoolniiOrtsRouter = require('./routes/hoolniiOrts')

const app = express();
connectDB();



app.use(express.json());
app.use(logger);
app.use(error);
app.use("/user", UserRouter);
app.use("/category",Categoryrouter);
app.use("/hoolniiTses",HoolniiTsesRouter);
app.use("/hoolniiOrts",HoolniiOrtsRouter);


app.listen(process.env.port, () => {
  console.log(`server listen ${process.env.port}`);
});