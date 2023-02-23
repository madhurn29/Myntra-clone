import { Box, Image, Text, Icon } from "@chakra-ui/react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";
function Product_card_store({ id,linkCategory, category, brand_name, images, name, price }) {
  // console.log(category)

  const handleDelete = (id,linkCategory) => {
    console.log("hi",id,linkCategory);
  };
  return (
    <Box boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px;"} cursor={"pointer"}>
      <Link to={`/store/${category}-${id}`}>
        <Box>
          <Image src={images[0]} />
        </Box>
      </Link>
      <Box textAlign={"left"} pl={{ lg: "5px" }}>
        <Text fontWeight={700}>{brand_name}</Text>
        <Text>{name.substring(0, 20)}...</Text>
        <Box
          border={"1px solid re"}
          display={"flex"}
          gap={"12px"}
          alignItems={"center"}
        >
          <Text>Rs. {price.sp}</Text>
          <Text fontSize={"12px"} textDecoration={"line-through"}>
            Rs.{price.mrp}
          </Text>
          <Text fontSize={"12px"} color={"green"}>
            {" "}
            ({price.discount}%)
          </Text>
          <Icon as={MdDelete} onClick={()=>handleDelete(id,linkCategory)} />
        </Box>
      </Box>
    </Box>
  );
}

export default Product_card_store;
