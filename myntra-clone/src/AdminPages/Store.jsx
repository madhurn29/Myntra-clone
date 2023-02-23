import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Select,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AdminSidebar from "../Components/AdminSidebar";
import Product_card_store from "../Components/Product_card_store";
import { useDispatch, useSelector } from "react-redux";
import { getRequestforAdminSide } from "../Redux/AdminReducer/action";
function Store() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("men-jeans");
  const [brands, setBrands] = useState("");
  const mensJeans = useSelector((store) => {
    // console.log(store.AdminReducer.mens_jeans);
    return store.AdminReducer.mens_jeans;
  });

  const mensTshirt = useSelector((store) => {
    // console.log(store.AdminReducer.mens_t);
    return store.AdminReducer.mens_tshirt;
  });

  const womensKurtas = useSelector((store) => {
    // console.log(store.AdminReducer.mens_t);
    return store.AdminReducer.womens_kurtas;
  });

  const womensTops = useSelector((store) => {
    // console.log(store.AdminReducer.mens_t);
    return store.AdminReducer.womens_tops;
  });

  const mensJeansBrand = [
    {
      text: "Roadster",
      value: "Roadster",
    },
    {
      text: "Levis",
      value: "Levis",
    },
    {
      text: "Wrogn",
      value: "WROGN",
    },
    {
      text: "HighLander",
      value: "HIGHLANDER",
    },
    {
      text: "Mast & Harbour",
      value: "Mast & Harbour",
    },
    {
      text: "Louis Philippe Jeans",
      value: "Louis Philippe Jeans",
    },
  ];

  const mensTshirtBrand = [
    {
      text: "Tommy Hilfiger",
      value: "Tommy Hilfiger",
    },
    {
      text: "U.S. Polo Assn.",
      value: "U.S. Polo Assn.",
    },
    {
      text: "Nautica",
      value: "Nautica",
    },
    {
      text: "WROGN",
      value: "WROGN",
    },
    {
      text: "Louis Philippe Sport",
      value: "Louis Philippe Sport",
    },
  ];
  const womensKurtasBrand = [
    { text: "Popnetic", value: "Popnetic" },
    { text: "Varanga", value: "Varanga" },
    { text: "Libas", value: "Libas" },
    { text: "Anouk", value: "Anouk" },
    { text: "Indo Era", value: "Indo Era" },
  ];
  const womensTopBrand = [
    { text: "SASSAFRAS", value: "SASSAFRAS" },
    { text: "QUIERO", value: "QUIERO" },
    { text: "URBANIC", value: "URBANIC" },
    { text: "Tokyo Talkies", value: "Tokyo Talkies" },
    { text: "Vero Moda", value: "Vero Moda" },
  ];

  const handleCategory = (e) => {
    // console.log(e.target.value);
    setCategory(e.target.value);
    setBrands("")
  };

  const handleBrands = (e) => {
    // console.log(e.target.value);
    setBrands(e.target.value);
  };
  useEffect(() => {

    let obj={}
    if(brands) obj.brand_name=brands
    console.log(brands);
    dispatch(getRequestforAdminSide(obj, category));
  }, [category,brands]);
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
          mt={{ base: "10px", sm: "15px", md: "15px", lg: "15px" }}
        >
          <Select
            // placeholder="Select Category"
            onChange={handleCategory}
            // defaultValue={"men-t-shirt"}
            bg="#ffa711"
            w={{ lg: "30%" }}
          >
            <option value="men-jeans">Mens-Jeans</option>
            <option value="men-t-shirts">Mens T-Shirt</option>
            <option value="women-kurtas-suits">Womens Kurta Suits</option>
            <option value="women-tops">Womens Tops</option>
          </Select>

          <Select
            placeholder="Select Brand"
            onChange={handleBrands}
            bg="#ff6a13"
            w={{ lg: "30%" }}
          >
            {category == "men-jeans" &&
              mensJeansBrand?.map((item) => {
                return (
                  <option key={item.text} value={item.value}>
                    {item.text}
                  </option>
                );
              })}

            {category == "men-t-shirts" &&
              mensTshirtBrand?.map((item) => {
                return (
                  <option key={item.text} value={item.value}>
                    {item.text}
                  </option>
                );
              })}

            {category == "women-kurtas-suits" &&
              womensKurtasBrand?.map((item) => {
                return (
                  <option key={item.text} value={item.value}>
                    {item.text}
                  </option>
                );
              })}
            {category == "women-tops" &&
              womensTopBrand?.map((item) => {
                return (
                  <option key={item.text} value={item.value}>
                    {item.text}
                  </option>
                );
              })}
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
          mt={{ base: "10px", sm: "20px", md: "30px", lg: "50px" }}
          gap={{ base: "10px", sm: "20px", md: "20px", lg: "50px" }}
          gridTemplateColumns={{
            base: "repeat(2,1fr)",
            sm: "repeat(3,1fr)",
            md: "repeat(4,1fr)",
            lg: "repeat(5,1fr)",
          }}
        >
          {mensJeans &&
            category == "men-jeans" &&
            mensJeans?.map((item) => {
              return (
                <Product_card_store
                  key={item.id}
                  {...item}
                  linkCategory={category}
                  category={"menJeans"}
                />
              );
            })}

          {mensTshirt &&
            category == "men-t-shirts" &&
            mensTshirt?.map((item) => {
              return (
                <Product_card_store
                  key={item.id}
                  {...item}
                  linkCategory={category}
                  category={"mensTshirt"}
                />
              );
            })}

          {womensKurtas &&
            category == "women-kurtas-suits" &&
            womensKurtas?.map((item) => {
              return (
                <Product_card_store
                  key={item.id}
                  {...item}
                  linkCategory={category}
                  category={"womensKurtas"}
                />
              );
            })}
          {womensTops &&
            category == "women-tops" &&
            womensTops?.map((item) => {
              return (
                <Product_card_store
                  key={item.id}
                  {...item}
                  linkCategory={category}
                  category={"womensTops"}
                />
              );
            })}
        </Box>
      </Box>
    </AdminSidebar>
  );
}

export default Store;
