import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Avatar,
  IconButton,
  Flex,
  Heading,
  Image,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  VStack,
} from "@chakra-ui/react";
// import { HamburgerIcon } from "@chakra-ui/icons";
import { Typewriter } from "react-simple-typewriter";
import HomePageImage from "../Assets/Images/homePageMainImage.png";
import HomeLayout from "../Layouts/HomeLayout";

function HomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HomeLayout>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        gap={{base:5,md:10}}
        mx={{ base: 4, md: 16 }}
        minH="80vh"
        paddingTop={10}
      >
        {/* Drawer for Small Screens */}
        <Box display={{ base: "block", md: "none" }} position="absolute" top={4} left={4}>
          <IconButton
            // icon={<HamburgerIcon />}
            aria-label="Open menu"
            onClick={onOpen}
            variant="outline"
            size="lg"
          />
        </Box>

        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack align="start" spacing={4}>
                <Link to="/courses">
                  <Button
                    width="100%"
                    bg="yellow.500"
                    rounded="md"
                    _hover={{ bg: "yellow.600" }}
                    onClick={onClose}
                  >
                    Explore Courses
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    width="100%"
                    borderWidth={1}
                    borderColor="yellow.500"
                    rounded="md"
                    _hover={{ bg: "yellow.600", color: "white" }}
                    onClick={onClose}
                  >
                    Contact Us
                  </Button>
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        {/* Main Content */}
        <Box width={{ base: "100%", md: "50%" }} textAlign="center" spacing={6}>
          <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold">
            Find out our{" "}
            <Typewriter
              words={["best", "affordable", "valuable"]}
              loop={5}
              cursor
              cursorStyle=""
              typeSpeed={250}
              deleteSpeed={200}
              delaySpeed={1000}
            />
          </Heading>

          <Text
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
            style={{ color: "#D69E2E", fontWeight: "bold" }}
          >
            Online Courses
          </Text>
          <Text fontSize={{ base: "lg", md: "xl" }} mt={4}>
            We have a large library of courses taught by highly skilled and
            qualified faculties at a very affordable cost.
          </Text>

          <Flex justify="center" gap={6} mt={6} display={{ base: "none", md: "flex" }}>
            <Link to="/courses">
              <Button
                bg="yellow.500"
                px={5}
                py={3}
                rounded="md"
                fontWeight="semibold"
                fontSize="lg"
                _hover={{ bg: "yellow.600" }}
                transition="background 0.3s ease"
              >
                Explore Courses
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                borderWidth={1}
                borderColor="yellow.500"
                px={5}
                py={3}
                rounded="md"
                fontWeight="semibold"
                fontSize="lg"
                _hover={{ bg: "yellow.600", color: "white" }}
                transition="background 0.3s ease"
              >
                Contact Us
              </Button>
            </Link>
          </Flex>
        </Box>

        <Box
          width={{ base: "100%", md: "50%" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image alt="homepage image" src={HomePageImage} />
        </Box>
      </Flex>
    </HomeLayout>
  );
}

export default HomePage;
