// /* eslint-disable no-unused-vars */
// import { AiFillCloseCircle } from "react-icons/ai";
// import { FiMenu } from "react-icons/fi";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";

// import Footer from "../Components/Footer";
// import { logout } from "../Redux/Slices/AuthSlice";
// function HomeLayout({ children }) {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const userData = useSelector((state) => state?.auth?.data);

//   // for checking if user is logged in
//   const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

//   // for displaying the options acc to role
//   const role = useSelector((state) => state?.auth?.role);

//   function changeWidth() {
//     const drawerSide = document.getElementsByClassName("drawer-side");
//     drawerSide[0].style.width = "auto";
//   }

//   function hideDrawer() {
//     const element = document.getElementsByClassName("drawer-toggle");
//     element[0].checked = false;

//     const drawerSide = document.getElementsByClassName("drawer-side");
//     drawerSide[0].style.width = "0";
//   }

//   async function handleLogout(e) {
//     e.preventDefault();

//     const res = await dispatch(logout());
//     if (res?.payload?.success) navigate("/");
//   }

//   return (
//     <div className="min-h-[80vh]">
//       <div className="drawer absolute left-0 z-50 w-fit">
//         <div className="drawer-content">
//           <label htmlFor="my-drawer" className="cursor-pointer relative">
//             <FiMenu
//               onClick={changeWidth}
//               size={"32px"}
//               className="font-bold text-white m-4"
//             />
//           </label>
//         </div>
//         <input className="drawer-toggle" id="my-drawer" type="checkbox" />

//         <div className="drawer-side">
//           <label htmlFor="my-drawer" className="drawer-overlay"></label>
//           <ul className="menu p-4 w-48 h-[100%] sm:w-80 bg-base-200 text-base-content relative">
//             <li className="w-fit absolute right-2 z-50">
//               <button onClick={hideDrawer}>
//                 <AiFillCloseCircle size={24} />
//               </button>
//             </li>
//             <li>
//               <Link to="/">Home</Link>
//             </li>

//             {isLoggedIn && role === "ADMIN" && (
//               <li>
//                 <Link to="/admin/dashboard"> Admin DashBoard</Link>
//               </li>
//             )}
//             {isLoggedIn && role === "ADMIN" && (
//               <li>
//                 <Link to="/course/create"> Create new course</Link>
//               </li>
//             )}

//             <li>
//               <Link to="/courses">All Courses</Link>
//             </li>

//             <li>
//               <Link to="/contact">Contact Us</Link>
//             </li>

//             <li>
//               <Link to="/about">About Us</Link>
//             </li>

//             {!isLoggedIn && (
//               <li className="absolute bottom-4 w-[90%]">
//                 <div className="w-full flex items-center justify-center">
//                   <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full">
//                     <Link to="/login">Login</Link>
//                   </button>
//                   <button className="btn-secondary px-4 py-1 font-semibold rounded-md w-full">
//                     <Link to="/signup">Signup</Link>
//                   </button>
//                 </div>
//               </li>
//             )}

//             {isLoggedIn && (
//               <li className="absolute bottom-4 w-[90%]">
//                 <div className="w-full flex items-center justify-center">
//                   <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full">

//                     <Link to="/user/profile">Profile</Link>
//                   </button>

//                   <button className="btn-secondary px-4 py-1 font-semibold rounded-md w-full">
//                     <Link onClick={handleLogout}>Logout</Link>
//                   </button>
//                 </div>
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>
//       {children}

//       <Footer />
//     </div>
//   );
// }

// export default HomeLayout;
/* eslint-disable no-unused-vars */
import { AiFillCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  IconButton,
  List,
  ListItem,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import Footer from "../Components/Footer";
import { logout } from "../Redux/Slices/AuthSlice";

function HomeLayout({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const userData = useSelector((state) => state?.auth?.data);
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  const role = useSelector((state) => state?.auth?.role);

  async function handleLogout(e) {
    e.preventDefault();
    const res = await dispatch(logout());
    if (res?.payload?.success) navigate("/");
  }

  return (
    <Flex direction="column" minH="100vh">
      <Box position="relative" zIndex="50">
        <IconButton
          aria-label="Open Menu"
          icon={<FiMenu />}
          onClick={onOpen}
          size="lg"
          variant="outline"
          colorScheme="whiteAlpha"
          position="absolute"
          top={4}
          left={4}
          zIndex={1}
        />
      </Box>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="gray.800" color="white">
          <DrawerCloseButton color="white" />
          <List spacing={5} p={4}>
            <ListItem>
              <Link to="/">Home</Link>
            </ListItem>
            {isLoggedIn && role === "ADMIN" && (
              <>
                <ListItem>
                  <Link to="/admin/dashboard">Admin Dashboard</Link>
                </ListItem>
                <ListItem>
                  <Link to="/course/create">Create new course</Link>
                </ListItem>
              </>
            )}
            <ListItem>
              <Link to="/courses">All Courses</Link>
            </ListItem>
            <ListItem>
              <Link to="/contact">Contact Us</Link>
            </ListItem>
            <ListItem>
              <Link to="/about">About Us</Link>
            </ListItem>
            {!isLoggedIn ? (
              <ListItem >
                <Flex direction="column" align="center">
                  <Button
                    as={Link}
                    to="/login"
                    colorScheme="yellow"
                    mb={2}
                    width="full"
                  >
                    Login
                  </Button>
                  <Button
                    as={Link}
                    to="/signup"
                    colorScheme="gray"
                    width="full"
                  >
                    Signup
                  </Button>
                </Flex>
              </ListItem>
            ) : (
              <ListItem >
                <Flex direction="column" align="center">
                  <Button
                    as={Link}
                    to="/user/profile"
                    colorScheme="yellow"
                    mb={2}
                    width="full"
                  >
                    Profile
                  </Button>
                  <Button
                    colorScheme="gray"
                    onClick={handleLogout}
                    width="full"
                  >
                    Logout
                  </Button>
                </Flex>
              </ListItem>
            )}
          </List>
        </DrawerContent>
      </Drawer>

      <Box flex="1">{children}</Box>
      <Footer />
    </Flex>
  );
}

export default HomeLayout;

