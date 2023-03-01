const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let StudentSchema = new Schema(
  {
    _id: { 
      type: mongoose.Types.ObjectId, 
      auto: true, 
      autoIndex: true 
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    nickName: {
      type: String,
    },
    phone: {
        type: String,
      },
    age: {
        type: Number,
      },
    birthDate: {
        type: String,
    },
  }, 
  { timestamps: true },
  { collection: "student" },
);

const Account = mongoose.model("student", StudentSchema);
module.exports = Account;