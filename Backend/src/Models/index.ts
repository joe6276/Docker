import { Request } from "express"

export interface AddTodo{
    title:string
    description:string

}

export interface Todo{
    id:string
    title:string
    description:string
}

export interface  ExtendedRequest extends Request{
    body:AddTodo
}