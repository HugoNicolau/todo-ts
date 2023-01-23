import express, { Request, Response } from 'express';
import taskRoutes from './routers/taskRoutes';

const app = express();
app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
    res.send("Ok");
})

app.use(taskRoutes);


app.listen(5000, () => {
    console.log(`Server is up and running`);
});