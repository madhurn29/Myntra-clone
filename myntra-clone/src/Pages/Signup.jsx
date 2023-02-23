import {
  Box,
  Center,
  Heading,
  HStack,
  Image,
  VStack,
  Text,
  Input,
  InputLeftAddon,
  InputGroup,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Link as ChakraLink,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [isError, setIsError] = useState(false);
  const location = useLocation();
  const comingFrom = location?.state || "/";
  console.log(comingFrom);
  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (isError) {
      setIsError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length !== 10 || +input != input) {
      setIsError(true);
    } else {
      try {
        localStorage.setItem("MbNumber", +input);
        navigate("/otp", { state: comingFrom, replace: true });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Box>
        <Center w={"full"} bgColor="#fceeea" h={"100vh"}>
          <VStack w={"420px"} spacing="0">
            <Box>
              <Image src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/9/21/8fca3ae9-d245-443b-a142-8d568247794c1663700243878-offer-banner-300-600x240-code-_-MYNTRA400.jpg" />
            </Box>

            <Box w={"100%"} p={"40px 30px 10px 30px"} bgColor="white">
              <FormControl isRequired isInvalid={isError}>
                <FormLabel display={"flex"} as="div">
                  <Center>
                    <HStack
                      w="full"
                      alignItems={"baseline"}
                      gap="0"
                      spacing={"5px"}
                    >
                      <Heading
                        fontWeight={"600"}
                        as={"h2"}
                        color="#424553"
                        fontSize="24px"
                        size="lg"
                      >
                        Login
                      </Heading>
                      <Text fontSize={"18px"} color="#5a5e6d">
                        or
                      </Text>
                      <Heading
                        fontWeight={"600"}
                        as={"h2"}
                        color="#424553"
                        fontSize="24px"
                        size="lg"
                      >
                        Signup
                      </Heading>
                    </HStack>
                  </Center>
                </FormLabel>

                <InputGroup mt={10} size={"sm"} variant={"outline"}>
                  <InputLeftAddon p={"15px 10px"} children="+91" />
                  <Input
                    p={"15px 10px"}
                    focusBorderColor="#f4f4f4"
                    maxLength={10}
                    minLength={10}
                    type="tel"
                    placeholder="Mobile Number"
                    value={input}
                    onChange={handleInputChange}
                  />
                </InputGroup>
                {!isError ? (
                  true
                ) : (
                  <FormErrorMessage fontSize={12}>
                    Please enter a valid mobile number(10 digit)
                  </FormErrorMessage>
                )}
                <FormHelperText mt={8} color={"#a7a9af"} textAlign="left">
                  By continuing, I agree to the&nbsp;
                  <ChakraLink
                    fontWeight={"bold"}
                    _hover={{ textDecoration: "none" }}
                    color={"#ff3f6c"}
                    href="#"
                  >
                    Terms of Use&nbsp;
                  </ChakraLink>
                  &&nbsp;
                  <ChakraLink
                    fontWeight={"bold"}
                    _hover={{ textDecoration: "none" }}
                    color={"#ff3f6c"}
                    href="#"
                  >
                    Privacy Policy&nbsp;
                  </ChakraLink>
                </FormHelperText>

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
                  CONTINUE
                </Button>
              </FormControl>

              <Text mb={10} color={"#a7a9af"} textAlign="left">
                Have trouble logging in?
                <ChakraLink
                  fontWeight={"bold"}
                  _hover={{ textDecoration: "none" }}
                  color={"#ff3f6c"}
                  href="#"
                >
                  &nbsp;Get help
                </ChakraLink>
              </Text>
            </Box>
          </VStack>
        </Center>
      </Box>
    </>
  );
};

export default Signup;
