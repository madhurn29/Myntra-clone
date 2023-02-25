import {
  Box,
  HStack,
  VStack,
  StackDivider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Text,
  Tag,
  Button,
  Image,
  Grid,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CartNavbar } from "../../Components/CartComponents/CartNavbar";
import {
  PaymentDetails1,
  PaymentDetails2,
} from "../../Components/CartComponents/PaymentDetails";
import { CartFooter } from "../../Components/CartComponents/CartFooter";
// import logoPic from "../Assets/logoPic.png"
import { AddressModel } from "../../Components/CartComponents/AddressModel";
import { useLocation } from "react-router-dom";
import deliveryPic from "../../Components/CartComponents/Image/delivery.png";
// import axios from "axios";

export const Address = () => {
  const [addressDetail, setAddress] = useState({});
  const { name, mobileNo, pinCode, area, town, city, state } = addressDetail;
  const { isOpen, onOpen, onClose } = useDisclosure();
  //   const location = useLocation();
  //   const { totalAmount, totalMRP, totalMRPDiscount } = props.location.state;
  //   const REACT_APP_MYNTRA_API = "https://myntra-api-mfh1.onrender.com/";
  const [totalMRP, setTotalMRP] = useState(0);
  const [totalMRPDiscount, setTotalMRPDiscount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  //   for navColor
  const [addressColor, setColor] = useState("#696b79");

  useEffect(() => {
    // change the color to red only on initial page load
    setColor("#20bd99");
  }, []);

  useEffect(() => {
    const addressString = localStorage.getItem("newAddress");
    if (addressString) {
      setAddress(JSON.parse(addressString));
    }
    const p = localStorage.getItem("price");
    if (p) {
      setTotalAmount(JSON.parse(p));
    }
    const m = localStorage.getItem("markedPrice");
    if (m) {
      setTotalMRP(JSON.parse(m));
    }
    const d = localStorage.getItem("discount");
    if (d) {
      setTotalMRPDiscount(JSON.parse(d));
    }
  }, []);

  return (
    <Box>
      <CartNavbar addressColor={addressColor} />
      <Box my={"25px"} py={"25px"}>
        <HStack
          px={"200px"}
          divider={<StackDivider color={"#ededef"} />}
          alignItems="flex-start"
        >
          <Box w="65%">
            <VStack w="full" align={"flex-start"} spacing="20px">
              <HStack w={"full"} justify={"space-between"}>
                <Text color={"#282c3f"} fontWeight={"bold"}>
                  Select Delivery Address
                </Text>
                <Button
                  variant={"outline"}
                  fontSize={"12px"}
                  size="sm"
                  colorScheme="blackAlpha"
                  color="#424553"
                  onClick={onOpen}
                >
                  ADD NEW ADDRESS
                </Button>
              </HStack>
              <Text color="#535766" fontSize={"12px"} fontWeight="bold">
                DEFAULT ADDRESS
              </Text>
              <VStack
                spacing={"15px"}
                borderRadius={"5px"}
                boxShadow={
                  "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
                }
                p={8}
                w="full"
                align={"flex-start"}
              >
                <HStack textAlign={"left"}>
                  <Text fontSize={"14px"} color="#282c3f" fontWeight={"bold"}>
                    {name}
                  </Text>
                  <Tag
                    fontSize={"10px"}
                    color="#03a685"
                    colorScheme={"gray"}
                    borderRadius="25%"
                    fontWeight="bold"
                  >
                    OFFICE
                  </Tag>
                </HStack>
                <VStack
                  align="flex-start"
                  fontSize={"13px"}
                  color="#424553"
                  fontWeight={"400"}
                  spacing={0}
                >
                  <Text>
                    {town},{area}-{city}
                  </Text>
                  <Text>
                    {city},{state} - {pinCode}
                  </Text>
                </VStack>
                <HStack fontSize={"13px"} color="#424553">
                  <Text>Mobile:</Text>
                  <Text color={"#424553"} fontWeight={"bold"}>
                    {mobileNo}
                  </Text>
                </HStack>

                <Text fontSize={"13px"} color="#424553">
                  &#x2022; Pay on Delivery available!
                </Text>
                <Button
                  onClick={onOpen}
                  variant={"outline"}
                  fontSize={"12px"}
                  size="sm"
                  colorScheme="blackAlpha"
                  color="#424553"
                >
                  EDIT ADDRESS
                </Button>
                <Modal isOpen={isOpen} onClose={onClose} colorScheme="pink">
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader
                      fontSize={"14px"}
                      color={"#535766"}
                      fontWeight={"bold"}
                    >
                      ADD NEW ADDRESS
                    </ModalHeader>
                    <ModalCloseButton color={"#535766"} fontWeight={"bold"} />
                    <AddressModel onClose={onClose} setAddress={setAddress} />
                  </ModalContent>
                </Modal>
              </VStack>
            </VStack>
          </Box>
          <Box w={"35%"}>
            <VStack
              w={"full"}
              divider={<StackDivider borderColor="gray.200" />}
              spacing="30px"
            >
              {/* ........................... */}

              {/* ....................... */}
              <HStack>
                <Image
                  w="45px"
                  boxShadow={"rgba(0, 0, 0, 0.02) 0px 1px 2px 0px;"}
                  height={"40px"}
                  src={deliveryPic}
                />
                <HStack>
                  <Text>Estimated delivery by</Text>
                  <Text fontWeight={"bold"}>10 march 2023</Text>
                </HStack>
              </HStack>
              {/* ........................... */}
              <PaymentDetails1
                totalMRP={totalMRP}
                totalMRPDiscount={totalMRPDiscount}
              />
              {/* .......................... */}
              <PaymentDetails2
                totalAmount={totalAmount}
                totalMRP={totalMRP}
                totalMRPDiscount={totalMRPDiscount}
                redirect={pinCode ? "/payment" : undefined}
                // redirect="/payment"
              />
              {/* ........................... */}
            </VStack>
          </Box>
        </HStack>
      </Box>
      <CartFooter />
    </Box>
  );
};
