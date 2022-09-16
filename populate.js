require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/product");

const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    console.log("db wiped!");
    await Product.create(jsonProducts);
    console.log("products added");
    console.log("connected");
    process.exit(0)
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
};

start();
