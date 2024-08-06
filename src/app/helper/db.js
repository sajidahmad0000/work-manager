import mongoose from "mongoose";
// import { User } from "../models/user.models";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "work-manager",
    });
    // console.log(connection);   => this gives you the whole connection object

    // const newUser = new User({
    //   username: "testing_lrn",
    //   email: "testing_first@gamil.com",
    //   password: "work-managersecret",
    // });

    // await newUser.save();
    // console.log("user created");
    console.log("Successfully Database Connected");
    console.log(`connected with the host ${connection.host}`);
  } catch (error) {
    console.log("failed to connect Database", error);
  }
};
