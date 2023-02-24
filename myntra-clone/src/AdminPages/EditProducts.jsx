import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AdminSidebar from "../Components/AdminSidebar";
import {
  getRequestforAdminSide,
  patchRequestforAdminSide,
} from "../Redux/AdminReducer/action";

const initilalData = {
  id: "",
  name: "",
  price: {
    mrp: "",
    discount: "",
    sp: "",
  },
  brand_name: "",
  sizes: [],
  customer_rating: "",
  product_details: [],
  images: [],
  quantity: "",
};

function EditProducts() {
  const param = useParams();
  const [show, setShow] = useState(false);
  const [data, setData] = useState(initilalData);

  const {
    name,
    price,
    brand_name,
    customer_rating,
    product_details,

    quantity,
  } = data;
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

  let paramsid = param.id;
  let [category, id] = paramsid.split("-");
  useEffect(() => {
    if (category === "menJeans") {
      let productData = mensJeans.find((el) => el.id === +id);
      setData(productData);
    }
    if (category === "mensTshirt") {
      let productData = mensTshirt.find((el) => el.id === +id);
      setData(productData);
    }
    if (category === "womensKurtas") {
      let productData = womensKurtas.find((el) => el.id === +id);
      setData(productData);
    }
    if (category === "womensTops") {
      let productData = womensTops.find((el) => el.id === +id);
      setData(productData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);

    if (name === "price.mrp") {
      setData({ ...data, price: { ...price, mrp: value } });
    } else if (name === "price.sp") {
      setData({ ...data, price: { ...price, sp: value } });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const handleSubmit = (id) => {
    // e.preventDefault();
    // console.log(data,+id);
    if (category === "menJeans") {
      dispatch(patchRequestforAdminSide(id, "men-jeans", data));
    } else if (category === "mensTshirt") {
      dispatch(patchRequestforAdminSide(id, "men-t-shirts", data));
    } else if (category === "womensKurtas") {
      dispatch(patchRequestforAdminSide(id, "women-kurtas-suits", data));
    } else if (category === "womensTops") {
      dispatch(patchRequestforAdminSide(id, "women-tops", data));
    }
  };
  return (
    <AdminSidebar>
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
              <BreadcrumbLink href="#">Edit Product</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Text fontSize={"4xl"} mb={"20px"}>
          Edit Product Details
        </Text>
        <Box display={"flex"} justifyContent={"center"} gap={"25px"}>
          {data?.name !== undefined && (
            <Box
              w={"30%"}
              p={"15px"}
              textAlign={"left"}
              border={"1px solid re"}
              boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
            >
              <Box
                w={"70%"}
                m={"auto"}
                border={"1px solid re"}
                display={"flex"}
                justifyContent={"center"}
              >
                <Image src={data.images && data?.images[0]} w={"80%"} />
              </Box>
              <Text fontWeight={500}> {data?.brand_name}</Text>
              <Text>{data?.name}</Text>
              <Text>Description : {data?.product_details}</Text>
              <Text>Rating : {data?.customer_rating}</Text>
              <Text>Special Price : Rs. {data?.price?.sp}</Text>

              <Text>Mrp : Rs. {data?.price?.mrp}</Text>
              <Button
                onClick={() => setShow((prev) => !prev)}
                colorScheme={"green"}
                px={"20px"}
                mt="5px"
              >
                Edit Details
              </Button>
            </Box>
          )}

          {show && (
            <Box
              border={"1px solid re"}
              width={"30%"}
              p={"15px"}
              boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
            >
              <FormControl width={"100%"} as={"fieldset"}>
                <FormLabel>Title</FormLabel>
                <Input value={name} name="name" onChange={handleChange} />

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
                  <Button
                    onClick={(e) => handleSubmit(id)}
                    colorScheme={"green"}
                  >
                    Submit Changes
                  </Button>
                  <Button
                    onClick={() => setShow((prev) => !prev)}
                    colorScheme={"red"}
                  >
                    Cancel Edit
                  </Button>
                </Box>
              </FormControl>
            </Box>
          )}
        </Box>
      </Box>
    </AdminSidebar>
  );
}

export default EditProducts;
//   useEffect(() => {
//     console.log(category, "44444444444444444444");
//     let newCategory = "";
//     if (category === "menJeans") {
//         console.log("from if")
//       newCategory = "men-jeans";
//     }
//     dispatch(getRequestforAdminSide({}, newCategory));
//   }, []);

// console.log(mensJeans)
