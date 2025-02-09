import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../Layouts/HomeLayout";
import { createAccount } from "../Redux/Slices/AuthSlice";
import { Box, Flex, Image } from "@chakra-ui/react";
import signupImage from "../Assets/loginImage.png"; // Replace with actual image path
import { BsPersonCircle } from "react-icons/bs";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState("");

  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    avatar: "",
  });

  function handleUserInput(e) {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  }

  function getImage(event) {
    event.preventDefault();
    const uploadedImage = event.target.files[0];

    if (uploadedImage) {
      setSignupData({
        ...signupData,
        avatar: uploadedImage,
      });
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadedImage);
      fileReader.addEventListener("load", function () {
        setPreviewImage(this.result);
      });
    }
  }

  async function createNewAccount(event) {
    event.preventDefault();
    const { fullName, email, password, avatar } = signupData;

    if (email || password || fullName || !avatar) {
      toast.error("Please Upload Image");
      return;
    }
    if (!email || !password || !fullName || !avatar) {
      toast.error("Please fill all the details");
      return;
    }

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);

    const response = await dispatch(createAccount(formData));
    if (response?.payload?.success) navigate("/");

    setSignupData({ fullName: "", email: "", password: "", avatar: "" });
    setPreviewImage("");
  }

  return (
    <HomeLayout>
      <Flex className="flex flex-wrap flex-col gap-8 md:gap-4 md:flex-row py-16 lg:py-2 justify-around items-center lg:justify-around lg:min-h-[76vh] px-4">
        <Box>
          <Image loading="lazy"
            src={signupImage}
            boxSize={{ sm: "400px", md: "400px", lg: "550px" }}
            objectFit={"cover"}
            borderRadius={"full"}
          />
        </Box>

        <form
          noValidate
          onSubmit={createNewAccount}
          className="flex flex-col gap-5 bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <h1 className="text-center text-2xl lg:text-3xl font-semibold text-gray-800">
            Signup
          </h1>

          {/* Avatar Upload */}
          <label htmlFor="image_uploads" className="cursor-pointer">
            
              <BsPersonCircle className="w-16 h-16 rounded-full text-gray-600 m-auto" />
            
          </label>
          <input
            onChange={getImage}
            className="hidden"
            type="file"
            id="image_uploads"
            accept=".jpg, .jpeg, .png, .svg"
          />

          {/* Full Name Field */}
          <div className="flex flex-col">
            <label htmlFor="fullName" className="text-gray-700 font-medium">
              Full Name
            </label>
            <input
              type="text"
              required
              name="fullName"
              id="fullName"
              placeholder="Enter your full name"
              className="mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={handleUserInput}
              value={signupData.fullName}
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              required
              name="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={handleUserInput}
              value={signupData.email}
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              required
              name="password"
              id="password"
              placeholder="Enter your password"
              className="mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={handleUserInput}
              value={signupData.password}
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="mt-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded-md transition-all duration-300"
          >
            Let`s Stert Journey
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:underline font-semibold"
            >
              Login
            </Link>
          </p>
        </form>
      </Flex>
    </HomeLayout>
  );
}

export default Signup;
