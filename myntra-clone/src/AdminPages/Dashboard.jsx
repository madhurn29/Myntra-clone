import React from "react";
import AdminSidebar from "../Components/AdminSidebar";

import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  Text,
} from "@chakra-ui/react";
function Dashboard() {
  console.log("dashboard");
  return (
    <AdminSidebar heading={"Dashboard"}>
      <Box border={"1px solid re"}>
        <Box>
          <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Admin</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Store</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      </Box>

      <Box>
        <Box
          mt={"25px"}
          border={"1px solid red"}
          display={"grid"}
          gridTemplateColumns={"repeat(3,1fr)"}
          justifyContent={"space-between"}
          gap={"25px"}
        >
          <Box
            // w={"28%"}

            display={"flex"}
            boxShadow={
              "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
            }
            bg={"#fff"}
            border={"1px solid gre"}
            borderRadius={"15px"}
          >
            <Box
              border={"1px solid blu"}
              display={"flex"}
              justifyContent={"center"}
              w={"50%"}
            >
              <Image
                w={"80%"}
                src="https://www.canadianginsengfarm.com/wp-content/uploads/2018/03/Product-Icon.png"
              />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Text fontSize={"2xl"}>Total Products</Text>
              <Text fontSize={"2xl"}>2500</Text>
            </Box>
          </Box>
          <Box
            // w={"28%"}

            display={"flex"}
            boxShadow={
              "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
            }
            bg={"#fff"}
            border={"1px solid gre"}
            borderRadius={"15px"}
          >
            <Box
              border={"1px solid blu"}
              display={"flex"}
              justifyContent={"center"}
              w={"50%"}
            >
              <Image
                w={"80%"}
                src="https://www.wigginsshredding.com/wp-content/uploads/2019/05/Box-Icon.png"
              />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Text fontSize={"2xl"}>Total Orders</Text>
              <Text fontSize={"2xl"}>250</Text>
            </Box>
          </Box>
          <Box
            // w={"28%"}

            display={"flex"}
            boxShadow={
              "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
            }
            bg={"#fff"}
            border={"1px solid gre"}
            borderRadius={"15px"}
          >
            <Box
              border={"1px solid blu"}
              display={"flex"}
              justifyContent={"center"}
              w={"50%"}
            >
              <Image
                w={"80%"}
                src="https://www.citypng.com/public/uploads/preview/profile-user-round-red-icon-symbol-download-png-11639594337tco5j3n0ix.png"
              />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Text fontSize={"2xl"}>Total Users</Text>
              <Text fontSize={"2xl"}>25</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </AdminSidebar>
  );
}

export default Dashboard;
