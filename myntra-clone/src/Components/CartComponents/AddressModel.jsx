import {
  Divider,
  ModalBody,
  ModalFooter,
  FormControl,
  Input,
  VStack,
  HStack,
  FormLabel,
  Button,
  useToast,
} from "@chakra-ui/react";
// import axios from "axios";
import React from "react";
import { useRef } from "react";

const addressObj = {
  name: "",
  mobileNo: "",
  pinCode: "",
  area: "",
  town: "",
  city: "",
  state: "",
};

export const AddressModel = ({ onClose, setAddress }) => {
  const addresRef = useRef(addressObj);
  const toast = useToast();
  // const REACT_APP_MYNTRA_API = "https://myntra-api-mfh1.onrender.com/";

  const handleAddress = () => {
    const { name, mobileNo, pinCode, area, town, city, state } =
      addresRef.current;
    console.log(addresRef.current);
    if (
      name &&
      mobileNo &&
      pinCode &&
      area &&
      town &&
      city &&
      state &&
      name.length > 2 &&
      mobileNo.length === 10 &&
      pinCode.length === 6
    ) {
      setAddress(addresRef.current);
      onClose();
    } else {
      toast({
        title: "Something went Wrong!",
        description: "Please enter right Details.",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <FormControl isRequired={true}>
      <ModalBody>
        <Divider />

        <VStack>
          <VStack w={"full"} align="flex-start">
            <FormLabel htmlFor="Contact Details">CONTACT DETAILS</FormLabel>
            <Input
              type="text"
              maxLength={15}
              onChange={(e) => (addresRef.current.name = e.target.value)}
              focusBorderColor="grey"
              placeholder="Name*"
            />
            <Input
              type={"text"}
              minLength={10}
              maxLength={10}
              onChange={(e) => (addresRef.current.mobileNo = e.target.value)}
              focusBorderColor="grey"
              placeholder="Mobile No*"
            />
          </VStack>
          <VStack w={"full"} align="flex-start">
            <FormLabel>ADDRESS</FormLabel>
            <Input
              type={"text"}
              maxLength={6}
              onChange={(e) => (addresRef.current.pinCode = e.target.value)}
              focusBorderColor="grey"
              placeholder="Pin Code*"
            ></Input>
            <Input
              type={"text"}
              maxLength={40}
              onChange={(e) => (addresRef.current.area = e.target.value)}
              focusBorderColor="grey"
              placeholder="Address (House No,Building,Street Area)*"
            ></Input>
            <Input
              type={"text"}
              maxLength={40}
              onChange={(e) => (addresRef.current.town = e.target.value)}
              focusBorderColor="grey"
              placeholder="Locality/Town*"
            ></Input>
            <HStack>
              <Input
                type={"text"}
                maxLength={20}
                onChange={(e) => (addresRef.current.city = e.target.value)}
                focusBorderColor="grey"
                placeholder="City/District*"
              ></Input>
              <Input
                type={"text"}
                maxLength={20}
                onChange={(e) => (addresRef.current.state = e.target.value)}
                focusBorderColor="grey"
                placeholder="State*"
              ></Input>
            </HStack>
          </VStack>
        </VStack>
      </ModalBody>

      <ModalFooter>
        <Button
          colorScheme={"pink"}
          variant="outline"
          w="full"
          onClick={handleAddress}
        >
          Submit Address
        </Button>
      </ModalFooter>
    </FormControl>
  );
};
