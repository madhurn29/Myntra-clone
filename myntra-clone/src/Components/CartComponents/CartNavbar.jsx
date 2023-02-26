import React from "react";
import { HStack, Box, Image, Divider, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import logo from "";

export const CartNavbar = ({ color, addressColor, paymentColor }) => {
  const navigate = useNavigate();

  return (
    <>
      <Box w="full" mt={"20px"}>
        <HStack
          width={"full"}
          justify="space-between"
          px={"80px"}
          borderBottom={"1px solid #f7f7f8"}
        >
          <Box onClick={() => navigate("/")}>
            <Image cursor={"pointer"} marginLeft={"30px"} w="50px" h="50px" src="https://aartisto.com/wp-content/uploads/2020/11/myntra.png" />
          </Box>
          <Box width={"340px"}>
            <HStack>
              <Box>
                <Text
                  fontFamily={"Helvetica,Arial,sans-serif"}
                  fontWeight={600}
                  color={color}
                  borderBottom={"3px solid"}
                  letterSpacing="3px"
                  fontSize={"13px"}
                >
                  BAG
                </Text>
              </Box>
              <Divider
                orientation="horizontal"
                border="1px dashed !important"
              />
              <Box>
                <Text
                  fontFamily={"Helvetica,Arial,sans-serif"}
                  fontWeight={600}
                  color={addressColor}
                  borderBottom={"3px solid"}
                  letterSpacing="3px"
                  fontSize={"13px"}
                >
                  ADDRESS
                </Text>
              </Box>
              <Divider
                orientation="horizontal"
                border="1px dashed !important"
              />
              <Box>
                <Text
                  fontFamily={"Helvetica,Arial,sans-serif"}
                  fontWeight={600}
                  color={paymentColor}
                  borderBottom={"3px solid"}
                  letterSpacing="3px"
                  fontSize={"13px"}
                >
                  PAYMENT
                </Text>
              </Box>
            </HStack>
          </Box>
          <Box>
            <HStack>
              <Image
                boxSize="30px"
                src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
              />
              <Text
                fontFamily={"Helvetica,Arial,sans-serif"}
                fontWeight={600}
                color="#696b79"
                letterSpacing="3px"
                fontSize={"13px"}
              >
                100% SECURE
              </Text>
            </HStack>
          </Box>
        </HStack>
      </Box>
    </>
  );
};