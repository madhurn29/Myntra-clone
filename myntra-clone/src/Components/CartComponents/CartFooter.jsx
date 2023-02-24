import { Box, Divider, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

 export const payimage = [
  "https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png",
  "https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png",
  "https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png",
  "https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png",
  "https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png",
  "https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png",
  "https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png",
  "https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png",
  "https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png",
  "https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png",
];

export const CartFooter = () => {
  return (
    <Box>
      <Divider my={4} />
      <HStack w={"80%"} m="auto" justify={"space-between"}>
        <HStack w={"65%"}>
          {payimage.map((img, id) => {
            return (
              <Box key={id}>
                <Image src={img} />
              </Box>
            );
          })}
        </HStack>
        <Text fontSize={"14px"} color="#282c3f" fontWeight={600}>
          Need Help ? Contact Us
        </Text>
      </HStack>
    </Box>
  );
};