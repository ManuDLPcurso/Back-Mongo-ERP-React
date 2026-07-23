import express from "express";
import clientsRoutes from "./src/routes/clientsRoutes.js";
import { connectDB } from "./src/config/db.js";
import cors from 'cors'

const app = express();

app.use(express.json());// Importanete definirlo para que en metodos POST, PUT sepa que mandas un .json
//app.use(express.urlencoded({extended: true,}))
app.use(cors())
await connectDB();

app.use("/clients", clientsRoutes)

const PORT = 3000;
app.listen(PORT, () => {
console.log(`Servidor ejecutándose en puerto ${PORT}`);
});