import express, { Router } from "express";
import connection from "../utils/database.config"
import { Request, Response } from "express";

const router: Router = express.Router();

router.get("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const data = await connection.execute("SELECT * FROM Category WHERE category_id=?", [id]);
        res.status(200).json(
            data[0]
        )
    } catch (error) {
        res.json({ error: error });
    }
})

router.get("/", async (req: Request, res: Response) => {
    try {
        const data = await connection.execute("SELECT * FROM Category");
        res.status(200).json(
            data[0]
        )
    } catch (error) {
        res.json({ error: error });
    }
})

router.post("/", async (req: Request, res: Response) => {
    const name: string = req.body.name;
    console.log(name);

    try {
        const data = await connection.execute("INSERT INTO Category(name) VALUES(?)", [name]);
        res.status(201).json(
            {
                status: "success",
                message: "Add new category successfully",
                data: data[0]
            }
        )
    } catch (error) {
        res.json({ error: error });
    }
})

export default router;