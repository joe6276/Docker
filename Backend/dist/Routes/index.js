"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_1 = require("../Controller/todo");
const router = (0, express_1.Router)();
router.get('/', todo_1.getTodos);
router.post('/', todo_1.AddTodo);
exports.default = router;
