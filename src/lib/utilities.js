import mongoose from "mongoose";
import crypto from "crypto";

const connection = {};

export const connectDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log("db error: " + error);
    throw new Error("Problem in connection!");
  }
};

export const hash = (str) => {
  const hash = crypto
    .createHmac("sha256", process.env.HASH_SECRET)
    .update(str)
    .digest("hex");

  return hash;
};

export const generateFileName = (name) => {
  const extension = name.split(".").pop();

  const fileName = name.replace(`.${extension}`, `-${Date.now()}.${extension}`);

  return fileName;
};

export const subs = [
  "Physics 1st",
  "Physics 2nd",
  "Chemistry 1st",
  "Chemistry 2nd",
  "Math 1st",
  "Math 2nd",
  "English 1st",
  "English 2nd",
];

export const chaps = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

export const toastProps = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};
