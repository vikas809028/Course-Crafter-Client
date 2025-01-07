import { FiMenu } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import {
  Box,
  Button,
  Flex,
  List,
  ListItem,
  Drawer,
  useColorMode,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Image,
  Switch,
  Avatar,
  Text,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";

import { logout } from "../Redux/Slices/AuthSlice";
import Footer from "./Footer";

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


  const { colorMode, toggleColorMode } = useColorMode();

  const size = useBreakpointValue({ base: "sm", md: "lg", lg: "xl" });

  return (
    <Box minH={"100vh"} bg={colorMode === "dark" ? "gray.800" : "gray.50"}>
      <Flex
        top={0}
        position={"sticky"}
        bg={colorMode === "dark" ? "gray.800" : "white"}
        px={4}
        zIndex={2}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        boxShadow={"medium"}
      >
        <Flex alignItems="center" gap={4}>
          {size === "sm" && (
            <IconButton
              aria-label="Open Menu"
              icon={<FiMenu />}
              onClick={onOpen}
              size="lg"
              variant="outline"
              colorScheme="whiteAlpha"
              zIndex={2}
            />
          )}

          <Image boxSize={"5rem"} src="/logo.svg" alt="Logo" />
        </Flex>

        {size !== "sm" && (
          <Flex
            flexDirection={"row"}
            gap={{ base: 4, lg: 10 }}
            fontSize={"larger"}
            alignItems={"center"}
          >
            <Switch
              isChecked={colorMode === "dark"}
              onChange={toggleColorMode}
            />

            <Link to="/">
              <Text>Home</Text>
            </Link>
            <Link to="/courses">
              <Text>All&nbsp;Courses</Text>
            </Link>
            <Link to="/contact">
              <Text>Contact&nbsp;Us</Text>
            </Link>
            <Link to="/about">
              <Text>About&nbsp;Us</Text>
            </Link>

            {!isLoggedIn ? (
              <Button as={Link} to="/login" colorScheme="yellow">
                Login
              </Button>
            ) : (
              <Flex direction="row" gap={10} align="center">
                <Avatar
                  as={Link}
                  to="/user/profile"
                  src={userData?.avatar?.secure_url}
                />
                <Button colorScheme="gray" onClick={handleLogout} width="full">
                  Logout
                </Button>
              </Flex>
            )}

            {isLoggedIn && role === "ADMIN" && (
              <>
                <Link to="/admin/dashboard">Admin Dashboard</Link>
                <Link to="/course/create">Create new course</Link>
              </>
            )}
          </Flex>
        )}
      </Flex>

      {/* Mobile Drawer (only for small screens) */}
      {size === "sm" && (
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
                <ListItem>
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
                <ListItem>
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
      )}

      <Box flex="1">{children}</Box>
     <Footer/>
    </Box>
  );
}

export default HomeLayout;
