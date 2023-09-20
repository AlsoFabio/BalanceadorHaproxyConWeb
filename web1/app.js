import express from 'express';
import morgan from 'morgan';

const contenedor = process.env.CONTENEDOR || 'no pusiste un numero';
const app = express();
const PORT = 80;

app.use(morgan('tiny'))

app.get("/", async (req, res) => {
    res.json({ 'contenedor': contenedor });
});

app.listen(PORT, () => { console.log(`localhost:${PORT}`); })