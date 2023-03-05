import {
  Box,
  Button,
  Center,
  FormControl,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { postLoginRequest } from "../Redux/AuthReducer/action";
let initalForm = {
  firstname: "",
  lastname: "",
  password: "",
  mobile: "",
  pincode: "",
  buyerName: "",
  buyerLastName: "",
  area: "",
  town: "",
  city: "",
  state: "",
  gender: "",
};
function SignupForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [form, setForm] = useState(initalForm);
  const { firstname, lastname, password, gender } = form;
  const [mbNumber, setMbNumber] = useState(false);
  const comingFrom = location?.state || "/";
  console.log("comingFrom:", comingFrom);
  const toast = useToast();

  const isLoading = useSelector((store) => {
    return store.AuthReducer.isLoading;
  });

  console.log(isLoading);
  useEffect(() => {
    try {
      let nmbr = JSON.parse(localStorage.getItem("MbNumber")) || false;

      if (!nmbr) {
        navigate("/signup", { state: comingFrom, replace: true });
      } else {
        setMbNumber(nmbr);
      }
    } catch (error) {
      console.log(error);
    }
  }, [mbNumber]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleGenderChange = (e) => {
    setForm({ ...form, gender: e, mobile: mbNumber });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password.length);
    if (password.length < 8) {
      toast({
        position: "top",
        title: `Password must be at least 8 characters`,
        status: "error",
        isClosable: true,
        duration: 2000,
      });
    } else if (firstname.length == 0 || lastname.length == 0) {
      toast({
        position: "top",
        title: `Enter Firstname and Lastname`,
        status: "error",
        isClosable: true,
        duration: 2000,
      });
    } else if (gender === "") {
      toast({
        position: "top",
        title: `Select Gender`,
        status: "error",
        isClosable: true,
        duration: 2000,
      });
    } else {
      dispatch(postLoginRequest(form)).then((res) => {
        navigate("/cart");
      });
    }

    console.log("hi");
  };
  return (
    <>
      <Box>
        <Navbar />
        <Center w={"full"} bgColor="#fceeea" h={"100vh"}>
          <Box border={"1px solid re"} w={"420px"} p="20px" bg="#fff">
            <Center>
              <FormControl>
                <Text fontSize={"14px"} fontWeight={700}>
                  Complete your sign up
                </Text>
                <Box>
                  <Box
                    mt={"15px"}
                    display={"flex"}
                    alignItems={"center"}
                    gap="10px"
                  >
                    <Text fontSize={"12px"}> Mobile Number : </Text>
                    <Text> {mbNumber} </Text>
                  </Box>
                  <Input
                    type={"password"}
                    mt={"15px"}
                    p={"15px 10px"}
                    focusBorderColor="#f72a2a"
                    fontSize={"12px"}
                    // borderColor="red"
                    placeholder="Create Password *"
                    value={password}
                    name="password"
                    onChange={handleChange}
                  />
                  <Input
                    mt={"15px"}
                    p={"15px 10px"}
                    focusBorderColor="#f72a2a"
                    fontSize={"12px"}
                    placeholder="First Name"
                    value={firstname}
                    name="firstname"
                    onChange={handleChange}
                  />
                  <Input
                    mt={"15px"}
                    p={"15px 10px"}
                    focusBorderColor="#f72a2a"
                    fontSize={"12px"}
                    placeholder="Last Name"
                    value={lastname}
                    name="lastname"
                    onChange={handleChange}
                  />

                  <Box
                    mt={"15px"}
                    fontSize={"12px"}
                    display={"flex"}
                    justifyContent={"space-between"}
                  >
                    <Box>Select Gender</Box>
                    <Box>
                      <RadioGroup onChange={handleGenderChange}>
                        <Stack direction="row" spacing={"25px"}>
                          <Radio size="sm" colorScheme={"green"} value="male">
                            Male
                          </Radio>
                          <Radio size="sm" colorScheme={"green"} value="female">
                            Female
                          </Radio>
                        </Stack>
                      </RadioGroup>
                    </Box>
                  </Box>

                  <InputGroup mt={5} size={"sm"} variant={"outline"}>
                    <InputLeftAddon p={"15px 10px"} children="+91" />
                    <Input
                      p={"15px 10px"}
                      focusBorderColor="#f4f4f4"
                      maxLength={10}
                      minLength={10}
                      fontSize={"12px"}
                      type="tel"
                      placeholder="Alternate Mobile Number (Optional)"
                      //   value={input}
                      //   onChange={handleInputChange}
                    />
                  </InputGroup>
                  <FormHelperText fontSize={"10px"}>
                    This will help recover your account if needed
                  </FormHelperText>
                </Box>
                <Button
                  w={"100%"}
                  mt={8}
                  mb={4}
                  variant="solid"
                  backgroundColor="#ff3f6c"
                  color={"#fff"}
                  borderRadius="0"
                  colorScheme={"none"}
                  type="submit"
                  onClick={handleSubmit}
                >
                  {isLoading ? "CREATING ACCOUNT" : "CREATE ACCOUNT"}
                </Button>
              </FormControl>
            </Center>
          </Box>
        </Center>
      </Box>
    </>
  );
}

export default SignupForm;
