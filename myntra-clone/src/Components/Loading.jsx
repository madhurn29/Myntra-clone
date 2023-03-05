import { Box, Image, Button, Text, Skeleton } from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from "../styles/card.module.css"

const Loading = ({  sizes, customer_rating, price, name, brand_name }) => {

    const [img, setImg] = useState(true);
    const [wish, setWish] = useState(false);

    const handleMouseHover = () => {
        setImg(true);
    }

    const handleMouseOut = () => {
        setImg(false);
    }

    return (
        <>
            <Skeleton margin={"10px"} borderRadius={"4px"} className={styles.card} h="auto" w="210px"
                onMouseOver={() => setWish(true)} onMouseOut={() => setWish(false)}>

                <Box>
                    <Image borderRadius={"4px"} onMouseOver={handleMouseHover} onMouseOut={handleMouseOut} src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9162839/2022/7/13/e22894f7-03cc-4ea8-8916-607d4146096d1657686472746HIGHLANDERMenBlackTaperedFitMid-RiseCleanLookStretchableJean1.jpg" />
                </Box>

                <Box>
                    <Text textAlign={"center"} fontWeight={500}>
                        {name}...
                    </Text>
                </Box>

                {wish ? (
                    <Box padding={"16px 10px 16px 10px"} >
                        <Button fontWeight={700} borderRadius={"0px"} w="190px" colorScheme={"pink"} variant="outline">WISHLIST</Button>
                    </Box>

                ) : <Text textAlign={"center"} color={"pink"} fontWeight={700} fontSize={"16px"}>Brand : {brand_name}...</Text>}

                <Box display={"flex"} gap="10px" marginLeft="10px">
                    <Text fontSize={"14px"} color={"#282c3f"}>Sizes: {sizes}</Text>
                    <Text fontSize={"14px"} color={"#282c3f"}>Rating: {customer_rating}</Text>
                </Box>

                <Box display={"flex"} gap="10px" marginLeft="10px">
                    <Text color={"#282c3f"} fontWeight={700}>Rs. {price}</Text>
                    <Text padding={"3px"} fontSize={"12px"} color="gray" textDecoration={"line-through"}>Rs. {price}</Text>
                </Box>
            </Skeleton>
        </>
    )
}

export default Loading