// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// exports.register = async (req, res) => {
//   try {
//     // Check User
//     const { username, password } = req.body;
//     var user = await User.findOne({ username });
//     if (user) {
//       return res.status(400).send("Username Already Exists!!");
//     }
//     const salt = await bcrypt.genSalt(10);
//     user = new User({
//       username,
//       password,
//     });
//     // Encrypt
//     user.password = await bcrypt.hash(password, salt);
//     await user.save();
//     res.send("Register Success!");
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Server Error!!");
//   }
// };

// exports.login = async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     var user = await User.findOneAndUpdate({ username }, { new: true });
//     if (user && user.enabled) {
//       // Check Password
//       const isMatch = await bcrypt.compare(password, user.password);

//       if (!isMatch) {
//         return res.status(400).send("Password Invalid!!");
//       }
//       // Payload
//       const payload = {
//         user: {
//           username: user.username,
//           role: user.role,
//         },
//       };
//       // Generate Token
//       jwt.sign(payload, "jwtSecret", { expiresIn: 3600 }, (err, token) => {
//         if (err) throw err;
//         res.json({ token, payload });
//       });
//     } else {
//       return res.status(400).send("User Not found!!!");
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Server Error!");
//   }
// };
