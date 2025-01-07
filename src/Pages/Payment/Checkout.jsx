import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiRupee } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Heading,
  Spinner,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import HomeLayout from "../../Layouts/HomeLayout";
import {
  getRazorPayId,
  purchaseCourseBundle,
  verifyUserPayment,
} from "../../Redux/Slices/RazorpaySlice";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const razorpayKey = useSelector((state) => state?.razorpay?.key);
  const subscription_id = useSelector(
    (state) => state?.razorpay?.subscription_id
  );
  const [loading, setLoading] = useState(true);

  const paymentDetails = {
    razorpay_payment_id: "",
    razorpay_subscription_id: "",
    razorpay_signature: "",
  };

  async function handleSubscription(e) {
    e.preventDefault();
    if (!razorpayKey || !subscription_id) {
      toast.error("Unable to process payment. Please try again.");
      return;
    }

    const options = {
      key: razorpayKey,
      subscription_id: subscription_id,
      name: "Coursify Pvt. Ltd.",
      description: "Subscription",
      theme: {
        color: "#F37254",
      },

      handler: async function (response) {
        paymentDetails.razorpay_payment_id = response.razorpay_payment_id;
        paymentDetails.razorpay_signature = response.razorpay_signature;
        paymentDetails.razorpay_subscription_id =
          response.razorpay_subscription_id;

        toast.success("Payment successful!");

        const res = await dispatch(verifyUserPayment(paymentDetails));
        res?.payload?.success
          ? navigate("/checkout/success")
          : navigate("/checkout/fail");
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  async function load() {
    try {
      await dispatch(getRazorPayId());
      await dispatch(purchaseCourseBundle());
    } catch (error) {
      toast.error("Failed to load payment details. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.200");
  const cardBgColor = useColorModeValue("gray.50", "gray.700");

  if (loading) {
    return (
      <Flex minH="90vh" align="center" justify="center" bg={bgColor}>
        <Spinner size="xl" color="yellow.500" />
      </Flex>
    );
  }

  return (
    <HomeLayout>
      <Flex
        minH="90vh"
        align="center"
        justify="center"
        bg={bgColor}
        color={textColor}
      >
        <Box
          bg={cardBgColor}
          w="full"
          maxW="md"
          rounded="lg"
          shadow="lg"
          p={8}
          position="relative"
        >
          <Heading
            as="h1"
            textAlign="center"
            fontSize="2xl"
            fontWeight="bold"
            bg="yellow.500"
            py={2}
            roundedTop="lg"
            color="white"
          >
            Subscription Bundle
          </Heading>
          <VStack spacing={6} textAlign="center" mt={4}>
            <Text fontSize="md">
              This purchase will allow you to access all available courses on
              our platform for{" "}
              <Text as="span" fontWeight="bold" color="yellow.500">
                1 Year duration
              </Text>
              . All existing and newly launched courses will also be available.
            </Text>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="yellow.500"
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={1}
            >
              <BiRupee />
              499 only
            </Text>
            <Text fontSize="sm" color="gray.400">
              100% refund on cancellation
              <br />* Terms and conditions apply *
            </Text>
          </VStack>
          <Button
            mt={8}
            w="full"
            colorScheme="yellow"
            size="lg"
            fontWeight="bold"
            roundedBottom="lg"
            onClick={handleSubscription}
          >
            Buy Now
          </Button>
        </Box>
      </Flex>
    </HomeLayout>
  );
}

export default Checkout;
