import { Box, Image, Text, Icon } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { MdDelete, MdModeEdit } from "react-icons/md";
import BackdropExample from "../AdminPages/EditModal";
function Product_card_store({
  id,
  linkCategory,
  category,
  brand_name,
  images,
  name,
  price,
  handleDelete,
  sizes,
  product_details,
  customer_rating,
  quantity,
}) {
  //Todo: To go to edit product page, id is needed along with category , so i called 'linkCategory' and "category" as a prop here, linkCategory is the server path and category is just to get the reference of particular category so that i can filter accoridingly in edit product page

  const handleDeleteClick = (id, linkCategory) => {
    handleDelete(id, linkCategory);
  };
  // console.log("hi", id, linkCategory);

  return (
    <Box boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px;"} cursor={"pointer"}>
      <Link to={`/store/${category}-${id}`}>
        <Box>
          <Image _hover={{ padding: "4px" }} src={images[0]} />
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
          <Icon
            as={MdDelete}
            onClick={() => handleDeleteClick(id, linkCategory)}
          />
          {/* <Icon as={MdModeEdit} onClick={onClick} /> */}
          <BackdropExample
            id={id}
            title={name}
            brand={brand_name}
            desc={product_details}
            mrpPrice={price.mrp}
            SpecialPrice={price.sp}
            productRating={customer_rating}
            productQuantity={quantity}
            productImages={images}
            productSizes={sizes}
            productId={id}
            productDiscount={price.discount}
            linkCategory={linkCategory}
          />
          {/* onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        
      </Icon> */}
        </Box>
      </Box>
    </Box>
  );
}

export default Product_card_store;
