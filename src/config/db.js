import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://admin:admin@cluster0.pf42jo5.mongodb.net/base?appName=Cluster0"
    );
    console.log("Conexion realizada")
};