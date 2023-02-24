import { Box, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import React from 'react'
import { FiSearch } from 'react-icons/fi';

const SearchBox = () => {
    return (
        <Box padding={"15px 0px 15px 0px"}>
            <Stack spacing={2} align="center">
                <InputGroup marginRight={"20px"} bg={"#f5f5f6"} w="330px" borderRadius={"5px"}>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<FiSearch color='gray' />}
                    />
                    <Input type='text' placeholder='Search for products, brands and more' color={"gray"} />
                </InputGroup>
            </Stack>
        </Box>
    );
};

export default SearchBox



