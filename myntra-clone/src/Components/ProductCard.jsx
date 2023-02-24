import { Box, Image, Button, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "../styles/card.module.css"

const ProductCard = () => {
    return (
        <>
            <Box className={styles.card} h="auto" w="210px">

                <Box>
                    <Image src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10064529/2019/8/23/e2101e71-8707-4110-961a-14b675a574481566552597315-Roadster-Men-Jeans-4211566552597089-1.jpg" />
                </Box>

                <Box padding={"16px 10px 16px 10px"} >
                    <Button fontWeight={700} fontSize={"12px"} borderRadius={"0px"} w="190px" color={"#282c3f"} colorScheme={"#ffff"} variant="outline">WISH LIST</Button>
                </Box>

                <Box display={"flex"} justifyContent="space-between">
                    <Text fontSize={"14px"} color={"#282c3f"}>SIZE : 28</Text>
                    <Text>Rating : 4</Text>
                </Box>

                <Box>
                    <Text>Price : RS:290</Text>
                </Box>

            </Box>
        </>
    )
}

export default ProductCard