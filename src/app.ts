import "reflect-metadata";
import express from "express";
import "express-async-errors";
import handleError from "./errors/handleError";
import usersRoutes from "./routes/users.routes";
import loginRoutes from "./routes/login.routes";

const app = express();
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);

app.use(handleError);

export default app;
