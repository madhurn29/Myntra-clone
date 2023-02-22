import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

function Product_card_store() {
  return (
    <Box>
      <Box>
        <Image
          src={
            "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg"
          }
        />
      </Box>
      <Box textAlign={"left"} pl={{ lg: "5px" }}>
        <Text fontWeight={700}>Roadster</Text>
        <Text>Printed shirt</Text>
        <Text>Rs. 649</Text>
      </Box>
    </Box>
  );
}

export default Product_card_store;
