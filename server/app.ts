import bodyParser from "body-parser";
import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";
import categoriesRoutes from "./router/categories.routes"
import questionsRoutes from "./router/questions.routes"

const app: Express = express();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/api/v1/categories", categoriesRoutes);
app.use("/api/v1/questions", questionsRoutes)

app.listen(3000, () => {
    console.log("app listening at http://localhost:3000")
})