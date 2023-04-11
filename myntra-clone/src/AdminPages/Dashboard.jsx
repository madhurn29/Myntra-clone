import React, { useEffect, useState } from "react";
import AdminSidebar from "../Components/AdminSidebar";

import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  Td,
  Table,
  TableContainer,
  Tbody,

  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getRequestforAdminSide } from "../Redux/AdminReducer/action";
import { deleteUserData, getUSerData } from "../Redux/UserReducer/action";
import UserCard from "../Components/UserCard";

let arr = new Array(10).fill(0);

function Dashboard() {
  const dispatch = useDispatch();
  const mensJeans = useSelector((store) => {
    return store.AdminReducer.mens_jeans;
  });

  const mensTshirt = useSelector((store) => {
    return store.AdminReducer.mens_tshirt;
  });

  const womensKurtas = useSelector((store) => {
    return store.AdminReducer.womens_kurtas;
  });

  const womensTops = useSelector((store) => {
    return store.AdminReducer.womens_tops;
  });

  const Users = useSelector((store) => {
    return store.UserReducer.user;
  });

  const isLoading = useSelector((store) => {
    return store.UserReducer.isLoading;
  });
  console.log(isLoading, "isLoading");
  useEffect(() => {
    dispatch(getRequestforAdminSide({}, "men-jeans"));
    dispatch(getRequestforAdminSide({}, "men-t-shirts"));
    dispatch(getRequestforAdminSide({}, "women-kurtas-suits"));
    dispatch(getRequestforAdminSide({}, "women-tops"));
    dispatch(getUSerData());
  }, []);

  const handleDelete = (id) => {
    console.log("iddd", id);
    dispatch(deleteUserData(id)).then((res) => {
      dispatch(getUSerData());
    });
  };
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
              <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      </Box>

      <Box>
        <Box
          mt={"25px"}
          border={"1px solid re"}
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
              <Text fontSize={"2xl"}>
                {mensJeans.length +
                  womensKurtas.length +
                  womensTops.length +
                  mensTshirt.length}
              </Text>
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
                src="https://www.pngall.com/wp-content/uploads/5/Red-Shopping-Cart-Transparent.png"
              />
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Text fontSize={"2xl"}>Total Orders</Text>
              <Text fontSize={"2xl"}>2</Text>
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
              <Text fontSize={"2xl"}>{Users.length}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Text my={"20px"} fontSize={"2xl"}>
          Users
        </Text>
      </Box>
      <Box border={"1px solid re"}>
        <TableContainer>
          <Table variant="striped" colorScheme="pink">
            <Thead>
              <Tr>
                <Th>Sr. No</Th>
                <Th>First Name</Th>
                <Th>Last Name</Th>
                <Th>Mobile</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {isLoading &&
                arr.map((item) => {
                  return (
                    <Tr >
                      <Td>{""}</Td>
                      <Td>{""}</Td>
                      <Td>{""}</Td>
                      <Td>{""}</Td>
                      <Td>{""}</Td>
                    </Tr>
                  );
                })}
              {Users?.map((item, index) => {
                return (
                  <UserCard
                    key={item.id}
                    {...item}
                    handleDelete={handleDelete}
                    index={index}
                  />
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </AdminSidebar>
  );
}

export default Dashboard;
