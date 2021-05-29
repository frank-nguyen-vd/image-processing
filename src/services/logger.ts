import express from 'express';

const logger = (req: express.Request, res: express.Response, next: any) => {
    console.log(`${req.baseUrl} is visited`);
    next();
};

export default logger;
