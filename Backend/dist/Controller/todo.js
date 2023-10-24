"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodos = exports.AddTodo = void 0;
const mssql_1 = __importDefault(require("mssql"));
const Config_1 = require("../Config");
const uuid_1 = require("uuid");
function AddTodo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { title, description, image } = req.body;
            const pool = yield mssql_1.default.connect(Config_1.sqlConfig);
            yield pool.request()
                .input("id", (0, uuid_1.v4)())
                .input('title', title)
                .input('desc', description)
                .input('img', image)
                .execute('insertTodo');
            res.status(201).json("Todo Added");
        }
        catch (error) {
            res.status(400).json(error);
        }
    });
}
exports.AddTodo = AddTodo;
function getTodos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const pool = yield mssql_1.default.connect(Config_1.sqlConfig);
            const todos = yield (yield pool.request().execute('getTodos')).recordset;
            res.status(200).json(todos);
        }
        catch (error) {
            res.status(400).json(error);
        }
    });
}
exports.getTodos = getTodos;
