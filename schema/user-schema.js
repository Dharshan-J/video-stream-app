const Mongoose = require("mongoose");
const User = require("../utils/user-util");

const userSchema = Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  wishlist: {
    type: Array,
    required: false,
  },
});

const userModel = Mongoose.model("userModel", userSchema);

async function addUser(user) {
  try {
    let res = await userModel.create({
      name: user.name,
      mail: user.mail,
      password: user.password,
    });
    return res;
  } catch (error) {
    console.log("error when saving to DB" + error);
  }
}

async function getUser(_mail) {
  try {
    let res = await userModel.findOne({
      mail: _mail,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
}

async function updateUser(user) {
  try {
    let res = await userModel.findOneAndUpdate(
      {
        name: user.name,
      },
      {
        mail: user.mail,
        password: user.password,
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
}

async function addMovies(_name, movie) {
  try {
    let res = await userModel.findOneAndUpdate(
      {
        name: _name,
      },
      {
        $push: {
          wishlist: movie,
        },
      }
    );
  } catch (error) {}
}

// Mongoose.connect("mongodb://localhost:27017/video-stream-app", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const DB = Mongoose.connection;

// DB.on("error", () => {
//   console.log("error when connecting to DB");
// });

// DB.once("open", () => {
//   console.log("Connected to DB");
// });

// addMovies("dharshan","zee").then(res=>console.log(res))

module.exports = [addUser, getUser, updateUser];
