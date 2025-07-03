import mongoose from "mongoose";

const URI_MONGO = process.env.URL_DB;

let isConnected = false;

const ConectarBD = async () => {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(URI_MONGO, {
      bufferCommands: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState === 1;

    console.log("MongoDB conectado");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    process.exit(1);
  }
};

export default ConectarBD;
