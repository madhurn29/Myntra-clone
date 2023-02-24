import { Box, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  const getWishlitProd = () => {
    axios({
      method: "get",
      url: process.env.REACT_APP_MYNTRA_API + "/wishlist",
    })
      .then((res) => setWishlist(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getWishlitProd();
  }, [wishlist.length, setWishlist]);

  const handleDelete = (id) => {
    axios({
      method: "delete",
      url: process.env.REACT_APP_MYNTRA_API + "/wishlist/" + id,
    })
      .then((res) => getWishlitProd())
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddCart = (el) => {
    axios({
      method: "post",
      url: process.env.REACT_APP_MYNTRA_API + "/cart",
      data: { ...el, currentSize: el.size[0] },
    })
      .then((res) => {
        handleDelete(el.id);
      })
      .catch((err) => {
        handleDelete(el.id);
      });
  };
  return (
    <>
      <Box w={"full"} p={"50px 50px"}>
        <HStack spacing={"5px"}>
          <Text fontSize={"18px"} fontWeight={500} color={"#282c3f"}>
            My Wishlist
          </Text>
          <Text fontSize={"17px"} fontWeight={400} color={"#b2b4b9"}>
            {wishlist.length} items
          </Text>
        </HStack>
        <SimpleGrid columns={5} gap={"50px"} mt={8} mb={8}>
          {wishlist?.map((el) => {
            return (
              <SingleWishlistProduct
                key={el.id}
                el={el}
                handleAddCart={handleAddCart}
                handleDelete={handleDelete}
              />
            );
          })}
        </SimpleGrid>
      </Box>

      <Footer />
    </>
  );
};

export default Wishlist;
