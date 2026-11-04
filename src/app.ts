import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/tasks', (request: Request, response: Response) => {
    return response.status(200).json({
        tasks: [{ id: 1, name: "Bem-Vindo a wikipédia ifce ", done: false }],
    });
});

export default app;
