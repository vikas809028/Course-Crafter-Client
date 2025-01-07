import { useNavigate } from "react-router-dom";
import {
  Box,
  Image,
  Text,
  Heading,
  VStack,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

function CourseCard({ data }) {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate("/course/description/", { state: { ...data } })}
      w="22rem"
      h="430px"
      shadow="lg"
      rounded="lg"
      cursor="pointer"
      overflow="hidden"
      bg={useColorModeValue("gray.700", "gray.900")}
      color="white"
      _hover={{ transform: "scale(1.02)" }}
      transition="transform 0.2s ease-in-out"
    >
      <Image
        src={data?.thumbnail?.secure_url}
        alt="course thumbnail"
        h="12rem"
        w="full"
        roundedTop="lg"
        objectFit="cover"
        _hover={{ transform: "scale(1.1)" }}
        transition="transform 0.3s ease-in-out"
      />
      <VStack align="start" p={4} spacing={2}>
        <Heading size="md" color="yellow.400" noOfLines={2}>
          {data?.title}
        </Heading>
        <Text noOfLines={2}>{data?.description}</Text>
        <Stack spacing={1} fontWeight="semibold">
          <Text>
            <Text as="span" color="yellow.400" fontWeight="bold">
              Category:{" "}
            </Text>
            {data?.category}
          </Text>
          <Text>
            <Text as="span" color="yellow.400" fontWeight="bold">
              Total Lectures:{" "}
            </Text>
            {data?.numberoflectures}
          </Text>
          <Text>
            <Text as="span" color="yellow.400" fontWeight="bold">
              Instructor:{" "}
            </Text>
            {data?.createdBy}
          </Text>
        </Stack>
      </VStack>
    </Box>
  );
}

export default CourseCard;
