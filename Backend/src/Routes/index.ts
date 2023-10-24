import { Router } from "express";
import { AddTodo, getTodos } from "../Controller/todo";

const router= Router();


router.get('/',getTodos)
router.post('/',AddTodo)

export default router 