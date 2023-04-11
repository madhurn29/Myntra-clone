import React, { useState } from "react";
import {
  Box,
  HStack,
  StackDivider,
  VStack,
  Text,
  Button,
  Image,
  Icon,
  Checkbox,
  Circle,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Center,
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CartNavbar } from "../../Components/CartComponents/CartNavbar";
import { CartFooter } from "../../Components/CartComponents/CartFooter";
import { useEffect } from "react";
import { AddressModel } from "../../Components/CartComponents/AddressModel";
import { CartProductItem } from "../../Components/CartComponents/CartProductItem";
import { MdOutlineLocalOffer } from "react-icons/md";
import {
  PaymentDetails1,
  PaymentDetails2,
} from "../../Components/CartComponents/PaymentDetails";
import axios from "axios";

export const Cart = () => {
  const navigate = useNavigate();
  const [cartProducts, setCartProducts] = useState([]);
  const [addressDetail, setAddress] = useState({});
  const { name, pinCode, area, town, city, state } = addressDetail;
  const [totalMRP, setTotalMRP] = useState(0);
  const [totalMRPDiscount, setTotalMRPDiscount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(totalMRP - totalMRPDiscount);
  const [isLoading, setIsLoading] = useState(true);

  localStorage.setItem("newAddress", JSON.stringify(addressDetail));
  localStorage.setItem("markedPrice", JSON.stringify(totalMRP));
  localStorage.setItem("discount", JSON.stringify(totalMRPDiscount));
  localStorage.setItem("price", JSON.stringify(totalAmount));

  const { isOpen, onOpen, onClose } = useDisclosure;
  const REACT_APP_MYNTRA_API = "https://myntra-api-mfh1.onrender.com/";

  useEffect(() => {
    handleCartProducts();
  }, []);

  const handleCartProducts = () => {
    setIsLoading(true);
    return axios({
      method: "get",
      url: REACT_APP_MYNTRA_API + "cart",
    }).then(({ data }) => {
      const modifiedData = data.map((item) => {
        return {
          ...item,
          currentSize: "", // Replace with the desired value for currentSize
        };
      });
      setCartProducts(modifiedData);
      calculateCartPrice(modifiedData);
      setIsLoading(false);
    });
  };

  const calculateCartPrice = (data) => {
    let tempTotalMrpValue = 0;
    let tempSpvalue = 0;
    let tempDiscountValue = 0;
    data?.forEach((item) => {
      tempTotalMrpValue += item.price.mrp * item.quantity;
      tempSpvalue += item.price.sp * item.quantity;
    });
    tempDiscountValue = tempTotalMrpValue - tempSpvalue;
    setTotalMRP(tempTotalMrpValue);
    setTotalAmount(tempSpvalue);
    setTotalMRPDiscount(tempDiscountValue);
  };

  const handleQuantity = (val, id) => {
    if (!val) {
      val = 1;
    }
    axios
      .patch(`https://myntra-api-mfh1.onrender.com/cart/${id}`, {
        quantity: val,
      })
      .then((res) => {
        handleCartProducts();
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://myntra-api-mfh1.onrender.com/cart/${id}`)
      .then((res) => {
        handleCartProducts();
      });
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spinner size="xl" color="blue.500" />
      </div>
    );
  }

  return (
    <VStack minH="120vh" justify={"space-between"}>
      <CartNavbar color={"#20bd99"} />
      {cartProducts.length === 0 ? (
        <Box>
          <Center>
            <VStack>
              <Image
                w="100px"
                src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"
              />
              <Text fontWeight={700} fontSize="20px" color={"424553"}>
                Hey,it feels so light!
              </Text>
              <Text
                fontSize={"14px"}
                pb="20px"
                fontWeight={400}
                color="#7e818c"
              >
                There is nothing in your bag.let's add some items.
              </Text>
              <Button
                onClick={() => navigate("/wishlist")}
                colorScheme={"pink"}
                variant="outline"
                borderRadius={"2px"}
              >
                ADD ITEM FROM WISHLIST
              </Button>
            </VStack>
          </Center>
        </Box>
      ) : (
        <Box>
          <Box>
            <HStack
              px={"200px"}
              divider={<StackDivider color={"#ededef"} />}
              alignItems="flex-start"
            >
              <Box w="65%">
                <VStack>
                  <Box
                    w="full"
                    border={"1px solid #ebebed"}
                    p={4}
                    borderRadius={"7px"}
                  >
                    <HStack justify={"space-between"} w={"full"}>
                      {name ? (
                        <VStack spacing={0} align={"flex-start"}>
                          <HStack w={"full"}>
                            <Text fontSize={"14px"}>Deliver to:</Text>
                            <Text fontSize={"14px"} fontWeight={"bold"}>
                              {name}, {pinCode}
                            </Text>
                          </HStack>

                          <Text fontSize={"12px"}>
                            {town}, {area},{city},{state}
                          </Text>
                        </VStack>
                      ) : (
                        <Text
                          fontWeight={"bold"}
                          fontSize={"14px"}
                          color="#535766"
                        >
                          Where we need to Deliver !
                        </Text>
                      )}

                      <Button
                        variant={"outline"}
                        colorScheme="pink"
                        borderRadius={"2px"}
                        size={"sm"}
                        fontSize="13px"
                        onClick={onOpen}
                      >
                        CHANGE ADDRESS
                      </Button>
                      <Modal
                        isOpen={isOpen}
                        onClose={onClose}
                        colorScheme="pink"
                      >
                        <ModalOverlay />
                        <ModalContent>
                          <ModalHeader
                            fontSize={"14px"}
                            color={"#535766"}
                            fontWeight={"bold"}
                          >
                            ADD NEW ADDRESS
                          </ModalHeader>
                          <ModalCloseButton
                            color={"#535766"}
                            fontWeight={"bold"}
                          />
                          <AddressModel
                            onClose={onClose}
                            setAddress={setAddress}
                          />
                        </ModalContent>
                      </Modal>
                    </HStack>
                  </Box>
                  {/* delivery tag   */}
                  <HStack
                    justify={"left"}
                    spacing={1}
                    w="full"
                    border={"1px solid #ebebed"}
                    p={"5px 5px"}
                    borderRadius={"3px"}
                  >
                    <Image
                      w="32px"
                      src="https://constant.myntassets.com/checkout/assets/img/ship-free.webp"
                    ></Image>
                    <Text fontSize={"14px"} pt="7px" color="#626472">
                      Yay!
                    </Text>
                    <Text
                      fontSize={"14px"}
                      pt="7px"
                      fontWeight={"bold"}
                      color="#535766"
                    >
                      No convenience fee
                    </Text>
                    <Text fontSize={"14px"} pt="7px" color="#626472">
                      on this order.
                    </Text>
                  </HStack>
                  {/* Products that added to cart  */}
                  <Box w={"full"}>
                    <VStack w={"full"} mt={8}>
                      {cartProducts?.map((item, i) => {
                        return (
                          <CartProductItem
                            key={item.id}
                            {...item}
                            handleQuantity={handleQuantity}
                            handleDelete={handleDelete}
                          />
                        );
                      })}
                    </VStack>
                  </Box>

                  <Box></Box>
                </VStack>
              </Box>
              <Box w={"35%"}>
                <VStack
                  w={"full"}
                  divider={<StackDivider borderColor="gray.200" />}
                >
                  {/* apply coupon  */}
                  <Box w="full">
                    <VStack align={"flex-start"} w={"full"}>
                      <Text
                        fontSize={"12px"}
                        color={"#535766"}
                        fontWeight={700}
                      >
                        COUPONS
                      </Text>
                      <HStack justify={"space-between"} w="full">
                        <HStack spacing={"15px"}>
                          <Icon
                            fontSize={"20px"}
                            as={MdOutlineLocalOffer}
                          ></Icon>
                          <Text
                            fontSize={"14px"}
                            color="535766"
                            fontWeight={"700"}
                          >
                            Apply Coupons
                          </Text>
                        </HStack>
                        <Button
                          borderRadius={2}
                          px={4}
                          variant={"outline"}
                          size={"xs"}
                          colorScheme={"pink"}
                        >
                          APPLY
                        </Button>
                      </HStack>
                    </VStack>
                  </Box>
                  {/* gifting and personalisation  */}
                  <Box w="full">
                    <VStack w={"full"} align="flex-start" textAlign={"left"}>
                      <Text
                        fontWeight={700}
                        fontSize={"12px"}
                        color={"#535766"}
                      >
                        GIFTING & PESONALISATION
                      </Text>
                      <HStack
                        w={"full"}
                        px={2}
                        bgColor="#eecdfa"
                        borderRadius={5}
                      >
                        <Box w={"45px"}>
                          <Image
                            w={"full"}
                            src="https://constant.myntassets.com/checkout/assets/img/gift-big.webp"
                            alt=""
                          ></Image>
                        </Box>
                        <VStack
                          spacing={"3px"}
                          py={2}
                          w={"full"}
                          textAlign={"left"}
                          align="flex-start"
                        >
                          <VStack
                            w={"full"}
                            textAlign={"left"}
                            align="flex-start"
                            spacing={"0px"}
                          >
                            <Text
                              fontSize={"14px"}
                              fontWeight={"bold"}
                              color="#282c3f"
                            >
                              Buying for a loved one?
                            </Text>
                            <Text
                              fontSize={"12px"}
                              fontWeight={400}
                              color="#282c3f"
                            >
                              Gift wrap and personalised message on card, Only
                              for ₹25
                            </Text>
                          </VStack>
                          <Text
                            fontSize={"12px"}
                            fontWeight={600}
                            color={"#360729"}
                          >
                            ADD GIFT WRAP
                          </Text>
                        </VStack>
                      </HStack>
                    </VStack>
                  </Box>
                  {/* support  */}
                  <Box w="full">
                    <VStack
                      w="full"
                      spacing={4}
                      textAlign={"left"}
                      align="flex-start"
                    >
                      <Text
                        fontWeight={700}
                        fontSize={"12px"}
                        color={"#535766"}
                      >
                        SUPPORT TRANSFORMATIVE SOCIAL WORK IN INDIA
                      </Text>
                      <Checkbox
                        colorScheme={"pink"}
                        color="#282c3f"
                        size={"sm"}
                        spacing={3}
                        fontWeight={600}
                      >
                        Support Us
                      </Checkbox>
                      <HStack fontSize={"14px"}>
                        <Circle
                          color={"#282c3f"}
                          fontWeight={700}
                          border={"1px solid #e2e3e6"}
                          borderRadius={"30px"}
                          cursor={"pointer"}
                          p="8px 16px"
                          _hover={{ background: "#f6ccff" }}
                        >
                          ₹10
                        </Circle>
                        <Circle
                          color={"#282c3f"}
                          fontWeight={700}
                          border={"1px solid #e2e3e6"}
                          borderRadius={"30px"}
                          cursor={"pointer"}
                          p="8px 16px"
                          _hover={{ background: "#f6ccff" }}
                        >
                          ₹50
                        </Circle>
                        <Circle
                          color={"#282c3f"}
                          fontWeight={700}
                          border={"1px solid #e2e3e6"}
                          borderRadius={"30px"}
                          cursor={"pointer"}
                          p="8px 16px"
                          _hover={{ background: "#f6ccff" }}
                        >
                          ₹100
                        </Circle>
                        <Circle
                          color={"#282c3f"}
                          fontWeight={700}
                          border={"1px solid #e2e3e6"}
                          borderRadius={"30px"}
                          cursor={"pointer"}
                          p="8px 16px"
                          _hover={{ background: "#f6ccff" }}
                        >
                          Other
                        </Circle>
                      </HStack>
                      <Text
                        fontSize={"14px"}
                        color={"#863e9c"}
                        fontWeight={"bold"}
                      >
                        Know More
                      </Text>
                    </VStack>
                  </Box>
                  {/* payment details  */}
                  <PaymentDetails1
                    totalMRP={totalMRP}
                    totalMRPDiscount={totalMRPDiscount}
                  />

                  <PaymentDetails2
                    totalAmount={totalAmount}
                    totalMRP={totalMRP}
                    totalMRPDiscount={totalMRPDiscount}
                    redirect={pinCode ? "/address" : "/address"}
                  />
                </VStack>
              </Box>
            </HStack>
          </Box>
        </Box>
      )}
      <CartFooter />
    </VStack>
  );
};
