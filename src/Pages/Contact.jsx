import { useState } from "react";
import { toast } from "react-hot-toast";
import axiosInstance from "../Helpers/axiosInstance";
import { isEmail } from "../Helpers/regexMatcher";
import HomeLayout from "../Layouts/HomeLayout";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Heading,
  Flex,
  useColorMode,
} from "@chakra-ui/react";

function Contact() {
  const { colorMode } = useColorMode(); // Get the current color mode
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    if (!userInput.email || !userInput.name || !userInput.message) {
      toast.error("All fields are mandatory");
      return;
    }

    if (!isEmail(userInput.email)) {
      toast.error("Invalid email");
      return;
    }

    try {
      const response = axiosInstance.post("/contact", userInput);
      toast.promise(response, {
        loading: "Submitting your message...",
        success: "Form submitted successfully",
        error: "Failed to submit the form",
      });
      const contactResponse = await response;
      if (contactResponse?.data?.success) {
        setUserInput({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (err) {
      toast.error("Operation failed...");
    }
  }

  return (
    <HomeLayout>
      <Flex
        align="center"
        justify="center"
        h="80vh"
        bg={colorMode === "dark" ? "gray.800" : "gray.50"} // Dynamic background color
        p={4}
      >
        <Box
          as="form"
          noValidate
          onSubmit={onFormSubmit}
          p={8}
          rounded="md"
          shadow="lg"
          w={{ base: "90%", md: "400px" }}
          bg={colorMode === "dark" ? "gray.800" : "white"} // Dynamic background color for form
          borderWidth={1}
          borderColor={colorMode === "dark" ? "gray.600" : "gray.300"} // Dynamic border color
        >
          <Heading
            as="h1"
            size="lg"
            mb={6}
            textAlign="center"
            color={colorMode === "dark" ? "white" : "black"}
          >
            Contact Form
          </Heading>

          <FormControl mb={4} isRequired>
            <FormLabel color={colorMode === "dark" ? "white" : "black"}>
              Name
            </FormLabel>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={userInput.name}
              onChange={handleInputChange}
              bg={colorMode === "dark" ? "gray.800" : "gray.100"} // Dynamic background color
              _focus={{
                bg: colorMode === "dark" ? "gray.700" : "white",
                borderColor: "blue.500",
              }}
              borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
            />
          </FormControl>

          <FormControl mb={4} isRequired>
            <FormLabel color={colorMode === "dark" ? "white" : "black"}>
              Email
            </FormLabel>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={userInput.email}
              onChange={handleInputChange}
              bg={colorMode === "dark" ? "gray.800" : "gray.100"}
              _focus={{
                bg: colorMode === "dark" ? "gray.700" : "white",
                borderColor: "blue.500",
              }}
              borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
            />
          </FormControl>

          <FormControl mb={4} isRequired>
            <FormLabel color={colorMode === "dark" ? "white" : "black"}>
              Message
            </FormLabel>
            <Textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={userInput.message}
              onChange={handleInputChange}
              bg={colorMode === "dark" ? "gray.800" : "gray.100"}
              _focus={{
                bg: colorMode === "dark" ? "gray.700" : "white",
                borderColor: "blue.500",
              }}
              borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
              resize="none"
              h="120px"
            />
          </FormControl>

          <Button
            type="submit"
            colorScheme="yellow"
            width="full"
            mt={4}
            _hover={{ bg: colorMode === "dark" ? "yellow.400" : "yellow.300" }}
          >
            Submit
          </Button>
        </Box>
      </Flex>
    </HomeLayout>
  );
}

export default Contact;
