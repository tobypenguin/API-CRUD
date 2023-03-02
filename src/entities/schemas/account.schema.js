const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let StudentSchema = new Schema(
  {
    _id: {
      type: mongoose.Types.ObjectId,
      auto: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true
    },
    nickName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /\d{3}-\d{3}-\d{4}/.test(v);
        },
        message: props => `${props.value} is not a valid phone number!`
      },

    },
    age: {
      type: Number,
      required: true
    },
    birthDate: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test(v);
        },
        message: props => `${props.value} is not a valid birth date!`
      },
    },
  },
  { timestamps: true },
  { collection: "student" },
  {runValidators: true},
);

const Account = mongoose.model("student", StudentSchema);
module.exports = Account;
