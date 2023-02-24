import { Box, Select, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
// import ProductCard from '../Components/ProductCard'
import { useSelector, useDispatch } from "react-redux"
import { getJeansData } from '../Redux/ProductReducer/action'

const MensJeans = () => {

    // const jeansData = useSelector((prod) => prod.ProductReducer.jeansData);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getJeansData());
    // });

    // console.log('jeansData:', jeansData);

    return (
        <div>
            <Navbar />

            <Box padding={"10px 0px 0px 20px"} w="100%" display="flex" gap={"5px"}>
                <Text>Home / Clothing / Jeans / </Text>
                <Text fontWeight={700}>Jeans For Men </Text>
            </Box>

            <Box padding={"10px 0px 0px 20px"} w="100%" display="flex" gap={"5px"}>
                <Text fontWeight={700}>Jeans For Men </Text>
                <Text>- 19935 Items </Text>
            </Box>

            <Box padding={"10px 0px 0px 20px"} w="95%" h="60px" display={"flex"} >
                <Box w="20%" h="100%" paddingTop="17px">
                    <Text fontSize={"16px"} fontWeight={700}>FILTERS</Text>
                </Box>
                <Box paddingTop={"10px"} w="80%" h="100%" >
                    <Select placeholder='Select option' borderRadius={"0px"}>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </Box>
            </Box>


            <Box display={"flex"} >
                {/* Side Bar */}

                <Box w="20%" h="1000px" border={"1px solid gray"} borderRight="none">

                </Box>
                {/* Products Card */}

                <Box w="80%" h="2000px" border={"1px solid gray"}>

                </Box>
            </Box>

            <Footer />
        </div>
    )
}

export default MensJeans