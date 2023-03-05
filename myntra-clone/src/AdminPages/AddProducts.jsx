import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import AdminSidebar from "../Components/AdminSidebar";
import { postRequestAdminSide } from "../Redux/AdminReducer/action";
import { useDispatch } from "react-redux";
const initilalData = {
  name: "",
  price: {
    mrp: "",
    discount: "",
    sp: "",
  },
  brand_name: "",
  sizes: [28, 32, 34, 36, 38],
  customer_rating: "",
  product_details: [""],
  images: [],
  quantity: "",
};
function AddProducts() {
  const [data, setData] = useState(initilalData);
  const {
    name,
    price,
    brand_name,
    customer_rating,
    product_details,
    images,
    quantity,
  } = data;
  const [category, setCategory] = useState("");
  const toast = useToast();
  const dispatch = useDispatch();
  const callToast = () => {
    toast({
      title: "Product Added successfully",
      position: "top",
      isClosable: true,
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);

    if (name === "price.mrp") {
      setData({ ...data, price: { ...price, mrp: +value } });
    } else if (name === "images") {
      setData({ ...data, images: [value] });
    } else if (name === "price.sp") {
      setData({
        ...data,
        price: {
          ...price,
          sp: +value,
        },
      });
    } else {
      setData({
        ...data,
        [name]: value,
        price: {
          ...price,
          discount: Math.floor(((price.mrp - price.sp) / price.mrp) * 100),
        },
      });
    }
  };

  const handleCategory = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
  };
  // console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name === "" ||
      brand_name === "" ||
      price.sp == "" ||
      price.mrp == "" ||
      images.length == 0 ||
      quantity == "" ||
      rating === "" ||
      product_details == "" ||
      category == ""
    ) {
      toast({
        position: "top",
        title: `Please add all the details`,
        status: "error",
        isClosable: true,
        duration: 2000,
      });
    } else {
      if (category === "men-jeans") {
        dispatch(postRequestAdminSide("men-jeans", data));
      } else if (category === "men-t-shirts") {
        dispatch(postRequestAdminSide("men-t-shirts", data));
      } else if (category === "women-kurtas-suits") {
        dispatch(postRequestAdminSide("women-kurtas-suits", data));
      } else if (category === "women-tops") {
        dispatch(postRequestAdminSide("women-tops", data));
      }
      callToast();
      setData(initilalData);
      setCategory("");
    }
    console.log(category, data, "handleSubmit");
  };
  return (
    <AdminSidebar heading={"Add Products"}>
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
              <BreadcrumbLink href="#">Add Product</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box
          m={"auto"}
          border={"1px solid re"}
          width={"50%"}
          p={"15px"}
          boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
        >
          <FormControl width={"100%"} as={"fieldset"}>
            <FormLabel>Image Link</FormLabel>
            <Input value={images} name="images" onChange={handleChange} />

            <FormLabel>Title</FormLabel>
            <Input value={name} name="name" onChange={handleChange} />
            <Box display={"flex"} mt={"5px"}>
              <FormLabel>Select Category</FormLabel>
              <Select
                placeholder="Category"
                onChange={handleCategory}
                value={category}
                // bg="#ffa711"
                w={{ lg: "30%" }}
              >
                <option value="men-jeans">Mens-Jeans</option>
                <option value="men-t-shirts">Mens T-Shirt</option>
                <option value="women-kurtas-suits">Womens Kurta Suits</option>
                <option value="women-tops">Womens Tops</option>
              </Select>
            </Box>
            <FormLabel>Brand</FormLabel>
            <Input
              name="brand_name"
              value={brand_name}
              onChange={handleChange}
            />

            <FormLabel>Description</FormLabel>
            <Input
              name="product_details"
              value={product_details}
              onChange={handleChange}
            />

            <FormLabel>Mrp</FormLabel>
            <Input
              name="price.mrp"
              value={price.mrp}
              type={"number"}
              onChange={handleChange}
            />
            <FormLabel>Special Price</FormLabel>
            <Input
              name="price.sp"
              value={price.sp}
              type={"number"}
              onChange={handleChange}
            />
            <Box display={"flex"} gap={"5px"} mt={"10px"}>
              <FormLabel>Rating</FormLabel>

              <Input
                name="customer_rating"
                value={customer_rating}
                type={"number"}
                onChange={handleChange}
              />
              <FormLabel>Quantity</FormLabel>
              <Input
                name="quantity"
                value={quantity}
                type={"number"}
                onChange={handleChange}
              />
            </Box>
            <Box display={"flex"} justifyContent={"space-around"} mt="10px">
              <Button onClick={(e) => handleSubmit(e)} colorScheme={"green"}>
                Add Product
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Box>
    </AdminSidebar>
  );
}

export default AddProducts;
