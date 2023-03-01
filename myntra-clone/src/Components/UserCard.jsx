import { Td, Tr } from "@chakra-ui/react";
import React from "react";

function UserCard({index,firstname,lastname,mobile,handleDelete,id}) {
  
    return (
    <Tr>
      <Td>{index+1}</Td>
      <Td>{firstname}</Td>
      <Td>{lastname}</Td>
      <Td>{mobile}</Td>
      <Td cursor={"pointer"} onClick={()=>handleDelete(id)} >Delete</Td>
    </Tr>
  );
}

export default UserCard;
