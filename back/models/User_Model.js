import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
  },

  avatar: {
    public_id: String,
    url: String,
  },

  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: [true, "Email already exists"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Password must be at least 6 characters"],
    select: false,
  },

  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],


  
  works: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Work",
    },
  ],



  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  
  ForgotPasswordToken : {
      type : String
  },
  ForgotPasswordExpiry : {
      type : Date
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
});
/*
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  next();
});

userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
};


userSchema.methods.getForgotPasswordToken = function(){

  const forgotToken = crypto.randomBytes(20).toString("hex");

  console.log(forgotToken);
  this.ForgotPasswordToken = crypto
  .createHash("sha256")
  .update(forgotToken)
  .digest("hex");

  this.ForgotPasswordExpiry = Date.now() + 20*60*1000;

  return forgotToken;
}


userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};
*/
let model = mongoose.model("User", userSchema);
export default model;
