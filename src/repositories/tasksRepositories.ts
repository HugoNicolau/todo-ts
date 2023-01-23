import { db } from "../database/database.js";

export async function posting(task){

    const { name, description } = task;

    return await db.query('INSERT INTO tasks (name, description) VALUES ($1, $2);', [name, description]);
}