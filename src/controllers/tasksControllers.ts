import { Request, Response } from 'express';
import { posting } from '@/repositories/tasksRepositories';

export async function postTask(req: Request, res: Response){
    const task = req.body;
    const { name, description } = task;
    try{
        const newTask={
          name,
          description, 
        }

        await posting(newTask);
        return res.sendStatus(201);

    }   catch(err){
        return res.status(500).send(err.message);
    }

    
}

export async function getTask(req: Request, res: Response){
    
    try{
        
        return res.sendStatus(201);

    }   catch(err){
        return res.status(500).send(err.message);
    }

    
}