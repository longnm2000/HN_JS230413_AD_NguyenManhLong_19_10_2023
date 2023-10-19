import express, { Router } from "express";
import connection from "../utils/database.config"
import { Request, Response } from "express";
import { RowDataPacket } from 'mysql2';
const router: Router = express.Router();

router.get("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const data = await connection.execute("SELECT * FROM Question WHERE question_id=?", [id]);
        res.status(200).json(
            data[0]
        )
    } catch (error) {
        res.json({ error: error });
    }
})

router.get("/:id/answers", async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const question = await connection.execute("SELECT * FROM Question WHERE question_id=?", [id]);
        const answer = await connection.execute("SELECT * FROM Answer WHERE question_id=?", [id]);
        res.status(200).json(
            { question: question[0], answer: answer[0] }
        )
    } catch (error) {
        res.json({ error: error });
    }
})

router.get("/", async (req: Request, res: Response) => {
    const category = req.query.category;
    const level = req.query.level;
    const limit = req.query.limit;
    console.log(category, level, limit);

    if (!!category && !!level && !!limit) {
        let levelId: number = 0;

        if (level === "easy") {
            levelId = 0;
        } else if (level === "medium") {
            levelId = 1;
        } else if (level === "difficult") {
            levelId = 2;
        }

        const questions = await connection.execute("SELECT * FROM Question WHERE category_id=? AND level=? LIMIT ?", [category, levelId, limit]);
        const questionIds: number[] = (questions[0] as RowDataPacket[]).map(e => e.question_id);
        const questionIdsString = questionIds.join(",");
        const answers = await connection.execute(`SELECT * FROM Answer WHERE question_id IN (${questionIdsString})`)
        res.json({
            questions: questions[0],
            answers: answers[0]
        });
    } else {
        try {
            const data = await connection.execute("SELECT * FROM Question");
            res.status(200).json(data[0]);
        } catch (error) {
            res.json({ error: error });
        }
    }
});



router.post("/", async (req: Request, res: Response) => {
    const { categoryId, content, time, level } = req.body;
    try {
        const data = await connection.execute("INSERT INTO Question(category_id,created_at,content,level) VALUES(?,?,?,?)", [categoryId, time, content, level]);
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