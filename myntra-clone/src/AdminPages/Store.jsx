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
import {
  deleteRequest,
  getRequestforAdminSide,
} from "../Redux/AdminReducer/action";
import { useSearchParams } from "react-router-dom";
import AdminProductCardSkeleton from "../Components/AdminProductCardSkeleton";
// import BackdropExample from "./EditModal";

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

const arr = new Array(20).fill(0);

function Store() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category");
  const initialBrand = searchParams.get("brand");
  const initialUpperPrice = searchParams.get("price.sp_lte");
  const initialLowerPrice = searchParams.get("price.sp_gte");
  let initialPriceRange = `${initialLowerPrice}&${initialUpperPrice}`;

  const [category, setCategory] = useState(initialCategory || "men-jeans");
  const [brands, setBrands] = useState(initialBrand || "");

  const [price, setPrice] = useState(initialPriceRange);
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => {
    return store.AdminReducer.isLoading;
  });

  // console.log(isLoading, "store");
  //* created different stores as my path to fetch data is different
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

  const handleCategory = (e) => {
    // console.log(e.target.value);
    setCategory(e.target.value);
    setBrands("");
  };

  const handleBrands = (e) => {
    // console.log(e.target.value);
    setBrands(e.target.value);
  };

  const handlePriceRange = (e) => {
    setPrice(e.target.value);
  };

  const handleDelete = (id, linkCategory) => {
    console.log("hi", id, linkCategory);
    dispatch(deleteRequest(id, linkCategory)).then((Res) => {
      dispatch(getRequestforAdminSide({}, linkCategory));
    });
  };

  useEffect(() => {
    let paramobj = {
      //!this object is for searchParams
      category,
    };

    if (brands) paramobj.brand = brands;
    setSearchParams(paramobj);

    let obj = {}; //! this object is for fetching data by passing the param obj in axios
    if (brands) obj.brand_name = brands;

    // console.log(price,"inside")
    if (price != "null&null") {
      let [ll, up] = price.split("&");

      obj["price.sp_gte"] = ll;
      obj["price.sp_lte"] = up;
      paramobj["price.sp_gte"] = ll;
      paramobj["price.sp_lte"] = up;
      setSearchParams(paramobj);
    }

    dispatch(getRequestforAdminSide(obj, category));
  }, [category, brands, price]);

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
              <BreadcrumbLink href="#">Store</BreadcrumbLink>
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
            onChange={handleCategory}
            value={category}
            bg="#ffa711"
            w={{ lg: "30%" }}
          >
            <option value="men-jeans">Mens-Jeans</option>
            <option value="men-t-shirts">Mens T-Shirt</option>
            <option value="women-kurtas-suits">Womens Kurta Suits</option>
            <option value="women-tops">Womens Tops</option>
          </Select>

          {/* //Todo: as my brands are differnt for different categories, i have mapped different options based on the categories    */}
          <Select
            placeholder="Select Brand"
            onChange={handleBrands}
            bg="#ff6a13"
            value={brands}
            w={{ lg: "30%" }}
          >
            {" "}
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
            onChange={handlePriceRange}
            value={price}
            w={{ lg: "30%" }}
          >
            <option value="500&999">Rs. 500 to Rs. 999</option>
            <option value="1000&1299">Rs. 1000 to Rs. 1299</option>
            <option value="1300&1499">Rs. 1300 to Rs. 1499</option>
            <option value="1500&1999">Rs. 1500 to Rs. 1999</option>
          </Select>
        </Box>

        {/* //Todo: based on the category, the data is mapped here from differnt keys in the store */}
        <Box
          border={"1px solid re"}
          display={"grid"}
          mt={{ base: "10px", sm: "20px", md: "30px", lg: "50px" }}
          gap={{ base: "10px", sm: "20px", md: "20px", lg: "30px" }}
          gridTemplateColumns={{
            base: "repeat(2,1fr)",
            sm: "repeat(3,1fr)",
            md: "repeat(4,1fr)",
            lg: "repeat(5,1fr)",
          }}
        >
          {isLoading &&
            arr.map((item, index) => {
              return <AdminProductCardSkeleton key={index} />;
            })}
          {mensJeans &&
            category == "men-jeans" &&
            mensJeans?.map((item) => {
              return (
                <Product_card_store
                  key={item.id}
                  {...item}
                  handleDelete={handleDelete}
                  linkCategory={category}
                  category={"menJeans"}
                />
                // <BackdropExample
                //   {...item}
                //   key={item.id}
                //   // linkCategory={category}
                //   handleDelete={handleDelete}
                // />
              );
            })}

          {mensTshirt &&
            category == "men-t-shirts" &&
            mensTshirt?.map((item) => {
              return (
                <Product_card_store
                  handleDelete={handleDelete}
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
                  handleDelete={handleDelete}
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
                  handleDelete={handleDelete}
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
