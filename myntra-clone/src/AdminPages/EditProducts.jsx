import React from "react";
import { useParams } from "react-router-dom";

function EditProducts() {
  const param = useParams();
  let paramsid = param.id;
  let [category, id] = paramsid.split("-");
  //   console.log(param.id, "params");

  //   console.log(arr)
  return <div>EditProducts</div>;
}

export default EditProducts;
