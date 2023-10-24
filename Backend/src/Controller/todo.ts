import { Request, Response } from "express";
import { ExtendedRequest } from "../Models";
import mssql from 'mssql'
import { sqlConfig } from "../Config";
import {v4 as uid} from 'uuid'

export async  function  AddTodo(req:ExtendedRequest, res:Response){
    try {
        const {title,description,image}= req.body
        const pool =await mssql.connect(sqlConfig)
         await pool.request()
        .input("id", uid())
        .input('title', title)
        .input('desc', description)
        .input('img', image)
        .execute('insertTodo')
        res.status(201).json("Todo Added")
    } catch (error) {
        
        res.status(400).json(error)
    }
}

export async  function  getTodos(req:Request, res:Response){
    try {
        const pool =await mssql.connect(sqlConfig)
        const todos = await (await pool.request().execute('getTodos')).recordset
        res.status(200).json(todos)
    } catch (error) {
        
        res.status(400).json(error)
    }
}