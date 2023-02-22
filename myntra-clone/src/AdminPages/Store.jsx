import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Select,
} from "@chakra-ui/react";
import React from "react";
import AdminSidebar from "../Components/AdminSidebar";
import Product_card_store from "../Components/Product_card_store";

function Store() {
  console.log("hi");
  return (
    <AdminSidebar heading={"Store"}>
      <Box border={"1px solid re"}>
        {/* breadcrumbs here */}
        <Box>
          <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Admin</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        {/* filter section here */}
        <Box
          border={"1px solid re"}
          display={"flex"}
          justifyContent={"space-between"}
          mt={{base:"10px",sm:"15px",md:"15px", lg: "15px" }}
        >
          <Select placeholder="Select Category" bg="#ffa711" w={{ lg: "30%" }}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select placeholder="Select Brand " bg="#ff6a13" w={{ lg: "30%" }}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select
            placeholder="Select Price Range"
            bg="#ff1d5d"
            w={{ lg: "30%" }}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
        {/* Product section here */}
        <Box
          border={"1px solid red"}
          display={"grid"}
          mt={{base:"10px",sm:"20px",md:"30px", lg: "50px" }}
          gap={{base:"10px",sm:"20px", md: "20px", lg: "50px" }}
          gridTemplateColumns={{
            base: "repeat(2,1fr)",
            sm: "repeat(3,1fr)",
            md: "repeat(4,1fr)",
            lg: "repeat(5,1fr)",
          }}
        >
          <Product_card_store />
          <Product_card_store />
          <Product_card_store />
          <Product_card_store />
          <Product_card_store />
          <Product_card_store />
          <Product_card_store />
          <Product_card_store />
          <Product_card_store />
          <Product_card_store />
          <Product_card_store />
          <Product_card_store />
          <Product_card_store />
          <Product_card_store />
        </Box>
      </Box>
    </AdminSidebar>
  );
}

export default Store;
