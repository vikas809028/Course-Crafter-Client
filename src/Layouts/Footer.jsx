import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import {
  Box,
  Flex,
  Text,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      as="footer"
      bg={colorMode === "dark" ? "gray.700" : "white"}
      py={4}
      px={{ base: 4, sm: 20 }}
      display="flex"
      flexDir={{ base: "column", sm: "row" }}
      alignItems="center"
      justifyContent="space-between"
      minH="9.9vh"
    >
      <Text fontSize="lg" py={2}>Copyright {year} | All rights reserved</Text>
      <Flex align="center" gap={5}>
        <IconButton
          as="a"
          href="#"
          aria-label="Facebook"
          icon={<BsFacebook />}
          variant="ghost"
          colorScheme="yellow"
          fontSize="2xl"
          _hover={{ color: "yellow.500" }}
        />
        <IconButton
          as="a"
          href="#"
          aria-label="Instagram"
          icon={<BsInstagram />}
          variant="ghost"
          colorScheme="yellow"
          fontSize="2xl"
          _hover={{ color: "yellow.500" }}
        />
        <IconButton
          as="a"
          href="#"
          aria-label="LinkedIn"
          icon={<BsLinkedin />}
          variant="ghost"
          colorScheme="yellow"
          fontSize="2xl"
          _hover={{ color: "yellow.500" }}
        />
        <IconButton
          as="a"
          href="#"
          aria-label="Twitter"
          icon={<BsTwitter />}
          variant="ghost"
          colorScheme="yellow"
          fontSize="2xl"
          _hover={{ color: "yellow.500" }}
        />
      </Flex>
    </Box>
  );
};

export default Footer;
