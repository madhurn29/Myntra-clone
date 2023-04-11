import {
  Box,
  Select,
  SimpleGrid,
  Text,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ProductCard from "../Components/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { getRequestforAdminSide } from "../Redux/AdminReducer/action";
import Loading from "../Components/Loading";
import { useLocation, useSearchParams } from "react-router-dom";

const MensTshirt = () => {
  // filter by brand
  const [searchParams, setSearchParams] = useSearchParams();
  const initialState = searchParams.getAll("brand_name");
  const [brand, setBrand] = useState(initialState || []);
  const location = useLocation();

  const handleChange = (e) => {
    let newBrand = [...brand];
    let value = e.target.value;

    if (newBrand.includes(value)) {
      newBrand.splice(newBrand.indexOf(value), 1);
    } else {
      newBrand.push(value);
    }

    setBrand(newBrand);
  };

  //Sort by price
  const initialOrder = searchParams.get("_order");
  const [order, setOrder] = useState(initialOrder || "");

  const handleOrder = (e) => {
    setOrder(e.target.value);
  };

  const isLoading = useSelector((store) => {
    return store.AdminReducer.isLoading;
  });
  const mensTshirt = useSelector((store) => {
    return store.AdminReducer.mens_tshirt;
  });
  const dispatch = useDispatch();
  let arr = new Array(20).fill(0);
  let category = "men-t-shirts";

  let params = {};

  if (order) {
    params._sort = "price.sp";
  }
  brand && (params.brand_name = brand);
  order && (params._order = order);

  useEffect(() => {
    setSearchParams(params);
    dispatch(getRequestforAdminSide(params, category));
  }, [location.search, brand, category, order]);

  // console.log('mensTshirt:', mensTshirt);

  return (
    <div>
      <Navbar />

      <Box padding={"10px 0px 0px 20px"} w="100%" display="flex" gap={"5px"}>
        <Text>Home / Clothing / T-Shirts / </Text>
        <Text fontWeight={700}>T-Shirts For Men </Text>
      </Box>

      <Box padding={"10px 0px 0px 20px"} w="100%" display="flex" gap={"5px"}>
        <Text fontWeight={700}>Jeans For Men </Text>
        <Text>- 19935 Items </Text>
      </Box>

      <Box padding={"10px 0px 0px 20px"} w="95%" h="60px" display={"flex"}>
        <Box w="20%" h="100%" paddingTop="17px">
          <Text fontSize={"16px"} fontWeight={700}>
            FILTERS
          </Text>
        </Box>

        <Box
          paddingTop={"10px"}
          w="80%"
          h="100%"
          display={"flex"}
          justifyContent="end"
          gap={"20px"}
        >
          <Box onChange={handleOrder}>
            <Select borderRadius={"0px"}>
              <option value="">Sort By Price</option>
              <option value="asc" name="order" defaultChecked={order === "asc"}>
                Price: Low to High
              </option>
              <option
                value="desc"
                name="order"
                defaultChecked={order === "desc"}
              >
                Price: High to Low
              </option>
            </Select>
          </Box>

          <Box>
            <Select borderRadius={"0px"}>
              <option value="">Sort By Rating</option>
              <option value="option3">Customer Rating</option>
            </Select>
          </Box>
        </Box>
      </Box>

      <Box display={"flex"}>
        {/* Side Bar */}
        <Box w="20%" h="auto" border={"1px solid gray"} borderRight="none">
          {/* Filter by brand */}

          <Box
            w="100%"
            h="auto"
            border={"1px solid gray"}
            borderTop="none"
            borderRight="none"
          >
            <Box paddingLeft={"10px"} paddingTop="17px">
              <Text fontSize={"16px"} fontWeight={700}>
                BRAND
              </Text>
            </Box>

            <Box paddingLeft={"10px"} paddingTop="17px">
              <Stack spacing={0} direction="column">
                <Checkbox
                  colorScheme="pink"
                  value={"Tommy Hilfiger"}
                  onChange={handleChange}
                  defaultChecked={brand.includes("Tommy Hilfiger")}
                >
                  Tommy Hilfiger
                </Checkbox>
                <Checkbox
                  colorScheme="pink"
                  value={"U.S. Polo Assn."}
                  onChange={handleChange}
                  defaultChecked={brand.includes("U.S. Polo Assn.")}
                >
                  U.S. Polo Assn.
                </Checkbox>
                <Checkbox
                  colorScheme="pink"
                  value={"Nautica"}
                  onChange={handleChange}
                  defaultChecked={brand.includes("Nautica")}
                >
                  Nautica
                </Checkbox>
                <Checkbox
                  colorScheme="pink"
                  value={"WROGN"}
                  onChange={handleChange}
                  defaultChecked={brand.includes("WROGN")}
                >
                  wrogn
                </Checkbox>
                <Checkbox
                  colorScheme="pink"
                  value={"Louis Philippe Sport"}
                  onChange={handleChange}
                  defaultChecked={brand.includes("Louis Philippe Sport")}
                >
                  Louis Philippe Sport
                </Checkbox>
              </Stack>
            </Box>
          </Box>

          {/* Filter by price */}

          <Box
            w="100%"
            h="auto"
            border={"1px solid gray"}
            borderTop="none"
            borderRight="none"
          >
            <Box paddingLeft={"10px"} paddingTop="17px">
              <Text fontSize={"16px"} fontWeight={700}>
                PRICE
              </Text>
            </Box>
            <Box paddingLeft={"10px"} paddingTop="17px">
              <Stack spacing={0} direction="column">
                <Checkbox colorScheme="pink">Rs 500 to Rs 999</Checkbox>
                <Checkbox colorScheme="pink">Rs 1000 to Rs 1299</Checkbox>
                <Checkbox colorScheme="pink">Rs 1300 to Rs 1499</Checkbox>
                <Checkbox colorScheme="pink">Rs 1500 to Rs 1999</Checkbox>
              </Stack>
            </Box>
          </Box>

          {/* Filter by color */}

          <Box
            w="100%"
            h="auto"
            border={"1px solid gray"}
            borderTop="none"
            borderRight="none"
          >
            <Box paddingLeft={"10px"} paddingTop="17px">
              <Text fontSize={"16px"} fontWeight={700}>
                COLOR
              </Text>
            </Box>

            <Box paddingLeft={"10px"} paddingTop="17px">
              <Stack spacing={0} direction="column">
                <Checkbox colorScheme="pink">Blue</Checkbox>
                <Checkbox colorScheme="pink">Black</Checkbox>
                <Checkbox colorScheme="pink">Navy Blue</Checkbox>
                <Checkbox colorScheme="pink">Grey</Checkbox>
                <Checkbox colorScheme="pink">Charcoal</Checkbox>
                <Checkbox colorScheme="pink">White</Checkbox>
                <Checkbox colorScheme="pink">Olive Green</Checkbox>
                <Checkbox colorScheme="pink">Khakee</Checkbox>
                <Checkbox colorScheme="pink">Beige</Checkbox>
              </Stack>
            </Box>
          </Box>

          {/* Filter by Discount */}

          <Box
            w="100%"
            h="auto"
            border={"1px solid gray"}
            borderTop="none"
            borderRight="none"
          >
            <Box paddingLeft={"10px"} paddingTop="17px">
              <Text fontSize={"16px"} fontWeight={700}>
                DISCOUNT RANGE
              </Text>
            </Box>

            <Box paddingLeft={"10px"} paddingTop="17px">
              <Stack spacing={0} direction="column">
                <Checkbox colorScheme="pink">10% and above</Checkbox>
                <Checkbox colorScheme="pink">20% and above</Checkbox>
                <Checkbox colorScheme="pink">30% and above</Checkbox>
                <Checkbox colorScheme="pink">40% and above</Checkbox>
                <Checkbox colorScheme="pink">50% and above</Checkbox>
                <Checkbox colorScheme="pink">60% and above</Checkbox>
              </Stack>
            </Box>
          </Box>
        </Box>

        {/* Products Card */}
        <Box w="80%" h="auto" border={"1px solid gray"}>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 4, "2xl": 4 }}
            spacing={8}
          >
            {isLoading && arr.map((el, i) => <Loading key={i} />)}
            {mensTshirt.map((el) => {
              return (
                <Box key={el.id}>
                  <ProductCard category={"mensTshirt"} {...el} />
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>
      </Box>

      <Footer />
    </div>
  );
};

export default MensTshirt;
