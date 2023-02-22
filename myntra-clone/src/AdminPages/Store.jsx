import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import AdminSidebar from "../Components/AdminSidebar";

function Store() {

    console.log("hi")
  return (
    <AdminSidebar heading={"Store"}>
      <Box>
        <Image
          src={
            "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2275365/2022/11/22/a3af8a2f-a385-4cb7-bf7b-e34e0925fe0d1669105782439-Roadster-Men-White--Pure-Cotton-T-shirt-7301669105781913-1.jpg"
          }
        />
      </Box>
    </AdminSidebar>
  );
}

export default Store;
