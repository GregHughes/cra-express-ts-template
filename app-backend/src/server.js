import express from 'express';
import { db, connectToDb } from './db.js';

const app = express();

connectToDb(() => {
    console.log('Successfully connected to database.');
    app.listen(8000, () => {
        console.log('Server is listening on port 8000');
    });
})