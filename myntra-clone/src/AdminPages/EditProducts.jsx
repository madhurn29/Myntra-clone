import { Box, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRequestforAdminSide } from "../Redux/AdminReducer/action";

function EditProducts() {
  const param = useParams();
  const [data, setData] = useState({});
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

  return (
    <Box border={"1px solid red"}>
      <h1>Edit</h1>
      {data?.name !== undefined && (
        <Box w={"20%"} m="auto" textAlign={"left"} border={"1px solid red"}>
          <Image src={data.images && data?.images[0]} w={"100%"} />
          <Text fontWeight={500}> {data?.brand_name}</Text>
          <Text>{data?.name}</Text>
          <Text>Special Price : Rs. {data?.price?.sp}</Text>
          <Text>Mrp : Rs. {data?.price?.mrp}</Text>
        </Box>
      )}
    </Box>
  );
}

export default EditProducts;
