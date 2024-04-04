import mongoose from "mongoose";
export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("mongoDb connected successfully");
    });
    connection.on("error", (err) => {
      console.log(
        "mongoDb connection error ,make sure mongodb is running " + err
      );
      process.exit();
    });
  } catch (e) {
    console.log("Something goes wrong");
    console.log(e);
  }
}
