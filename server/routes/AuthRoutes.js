import { Router } from "express";
import {
  getUserInfo,
  login,
  signup,
  logout,
  updateProfile,
  addProfileImage,
  removeProfileImage,

  
 
} from "../controllers/AuthController.js";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import multer from "multer";


const authRoutes = Router();
const upload = multer({ dest: "uploads/profiles/" });

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.post("/logout", logout);
authRoutes.get("/userinfo", verifyToken, getUserInfo);
authRoutes.post("/update-profile", verifyToken, updateProfile);
authRoutes.post(
  "/add-profile-image",
  verifyToken,
  upload.single("profile-image"), // adds file to the req.file
  addProfileImage
);



authRoutes.delete("/remove-profile-image", verifyToken, removeProfileImage);

authRoutes.get("/current_user",verifyToken)

export default authRoutes;
