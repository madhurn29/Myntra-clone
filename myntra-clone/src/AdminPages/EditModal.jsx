// import {
//   Button,
//   Modal,
//   ModalBody,
//   ModalCloseButton,
//   ModalContent,
//   ModalFooter,
//   ModalHeader,
//   ModalOverlay,
//   Text,
//   Icon,
//   useDisclosure,
//   Input,
//   FormControl,
//   FormLabel,
//   Box,
// } from "@chakra-ui/react";
// import { MdModeEdit } from "react-icons/md";
// import React, { useEffect, useState } from "react";
// import ProductCard from "../Components/ProductCard";
// import Product_card_store from "../Components/Product_card_store";
// const initilalData = {
//   id: "",
//   name: "",
//   price: {
//     mrp: "",
//     discount: "",
//     sp: "",
//   },
//   brand_name: "",
//   sizes: [],
//   customer_rating: "",
//   product_details: [],
//   images: [],
//   quantity: "",
// };
// function BackdropExample(item) {
//   const [data, setData] = useState(initilalData);
//   const OverlayOne = () => (
//     <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
//   );
//   const [overlay, setOverlay] = React.useState(<OverlayOne />);
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const OverlayTwo = () => (
//     <ModalOverlay
//       bg="none"
//       backdropFilter="auto"
//       backdropInvert="80%"
//       backdropBlur="2px"
//     />
//   );
//   const {
//     name,
//     price,
//     brand_name,
//     customer_rating,
//     product_details,

//     quantity,
//   } = data;
//   let obj = { ...data, ...item };
//   // console.log(obj,"object");
//   delete obj.handleDelete;
//   useEffect(() => {
//     setData(obj);
//   }, []);

//   //   <Icon  onClick={() => handleEdit()} />

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     // console.log(name, value);

//     if (name === "price.mrp") {
//       setData({ ...data, price: { ...price, mrp: value } });
//     } else if (name === "price.sp") {
//       setData({ ...data, price: { ...price, sp: value } });
//     } else {
//       setData({ ...data, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(data, "item");
//   };

//   return (
//     <>
//       {/* <Product_card_store
//         {...item}
//         // handleDelete={handleDelete}
//         onClick={() => {
//           setOverlay(<OverlayOne />);
//           onOpen();
//         }}
//       /> */}

//       <Modal isCentered isOpen={isOpen} onClose={onClose}>
//         {overlay}
//         <ModalContent>
//           <ModalHeader>Modal Title</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <FormControl width={"100%"} as={"fieldset"}>
//               <FormLabel>Title</FormLabel>
//               <Input value={name} name="name" onChange={handleChange} />

//               <FormLabel>Brand</FormLabel>
//               <Input
//                 name="brand_name"
//                 value={brand_name}
//                 onChange={handleChange}
//               />

//               <FormLabel>Description</FormLabel>
//               <Input
//                 name="product_details"
//                 value={product_details}
//                 onChange={handleChange}
//               />

//               <FormLabel>Mrp</FormLabel>
//               <Input
//                 name="price.mrp"
//                 value={price.mrp}
//                 type={"number"}
//                 onChange={handleChange}
//               />
//               <FormLabel>Special Price</FormLabel>
//               <Input
//                 name="price.sp"
//                 value={price.sp}
//                 type={"number"}
//                 onChange={handleChange}
//               />
//               <Box display={"flex"} gap={"5px"} mt={"10px"}>
//                 <FormLabel>Rating</FormLabel>

//                 <Input
//                   name="customer_rating"
//                   value={customer_rating}
//                   type={"number"}
//                   onChange={handleChange}
//                 />
//                 <FormLabel>Quantity</FormLabel>
//                 <Input
//                   name="quantity"
//                   value={quantity}
//                   type={"number"}
//                   onChange={handleChange}
//                 />
//               </Box>
//               <Box display={"flex"} justifyContent={"space-around"} mt="10px">
//                 <Button onClick={(e) => handleSubmit(e)} colorScheme={"green"}>
//                   Submit Changes
//                 </Button>
//               </Box>
//             </FormControl>
//           </ModalBody>
//           <ModalFooter>
//             <Button onClick={onClose}>Close</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }
// export default BackdropExample;
