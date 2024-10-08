// import { Link } from "react-router-dom";

// import HomePageImage from "../Assets/Images/homePageMainImage.png";
// import HomeLayout from "../Layouts/HomeLayout";

// function HomePage() {
//     return (
//         <HomeLayout>
//             <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
//                 <div className="w-1/2 space-y-6">
//                     <h1 className="text-5xl font-semibold">
//                         Find out best
//                         <span className="text-yellow-500 font-bold">
//                             Online Courses
//                         </span>
//                     </h1>
//                     <p className="text-xl text-gray-200">
//                         We have a large library of courses taught by highly skilled and qualified faculties at a very affordable cost.
//                     </p>

//                     <div className="space-x-6">
//                         <Link to="/courses">
//                             <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
//                                 Explore courses
//                             </button>
//                         </Link>

//                         <Link to="/contact">
//                             <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
//                                 Contact Us
//                             </button>
//                         </Link>
//                     </div>
//                 </div>

//                 <div className="w-1/2 flex items-center justify-center">
//                     <img alt="homepage image" src={HomePageImage} />
//                 </div>

//             </div>
//         </HomeLayout>
//     );
// }

// export default HomePage;

import { Link } from "react-router-dom";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import HomePageImage from "../Assets/Images/homePageMainImage.png";
import HomeLayout from "../Layouts/HomeLayout";

function HomePage() {
    return (
        <HomeLayout>
            <Flex
                direction={{ base: "column", md: "row" }}
                align="center"
                justify="center"
                gap={10}
                mx={{ base: 4, md: 16 }}
                height="90vh"
                paddingTop={10}
                textColor="white"
            >
                <Box width={{ base: "100%", md: "50%" }} textAlign="center" spacing={6}>
                    <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="semibold">
                        Find out best
                        <span style={{ color: "#D69E2E", fontWeight: "bold" }}> Online Courses</span>
                    </Heading>
                    <Text fontSize={{ base: "lg", md: "xl" }} color="gray.200" mt={4}>
                        We have a large library of courses taught by highly skilled and qualified faculties at a very affordable cost.
                    </Text>

                    <Flex justify="center" gap={6} mt={6}>
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
                                Explore courses
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

                <Box width={{ base: "100%", md: "50%" }} display="flex" alignItems="center" justifyContent="center">
                    <Image alt="homepage image" src={HomePageImage} />
                </Box>
            </Flex>
        </HomeLayout>
    );
}

export default HomePage;
