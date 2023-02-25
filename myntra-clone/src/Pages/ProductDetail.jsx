import { Box, Button, FormLabel, Image, Select, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { useSelector } from "react-redux"
import { BiStar } from 'react-icons/bi';


const ProductDetail = () => {


    let ParamsIdCateg = useParams();
    let params = ParamsIdCateg.id
    let [id, category] = params.split("-");

    const [data, setData] = useState({});

    const mensJeans = useSelector((store) => store.AdminReducer.mens_jeans);
    const mensTshirt = useSelector((store) => store.AdminReducer.mens_tshirt);
    const womensKurtas = useSelector((store) => store.AdminReducer.womens_kurtas);
    const womensTops = useSelector((store) => store.AdminReducer.womens_tops);


    useEffect(() => {
        if (category === "menJeans") {
            let productData = mensJeans.find((el) => el.id === +id);
            setData(productData);
        }
        if (category === "mensTshirt") {
            let productData = mensTshirt.find((el) => el.id === +id);
            setData(productData);
        }
        if (category === "womensKurtas") {
            let productData = womensKurtas.find((el) => el.id === +id);
            setData(productData);
        }
        if (category === "womensTops") {
            let productData = womensTops.find((el) => el.id === +id);
            console.log('productData:', productData);
            setData(productData);
        }
    }, []);

    const { name, product_details, customer_rating, price, sizes, images } = data
    // console.log('data:', data)


    return (
        <div>

            <Navbar />

            <Box display={"flex"} margin="20px">

                <Box w="60%" h="auto" display={"grid"} gridTemplateColumns="repeat(2,1fr)" gap={"10px"}>
                    {images && images.map((el, i) => (
                        <Image src={el} key={i} />
                    ))}
                </Box>


                <Box w="40%" marginLeft={"30px"}>
                    <Box margin="10px">
                        <Text fontSize={"24px"} fontWeight={700}>{name}</Text>
                    </Box>

                    <Box margin="10px">
                        <Text fontSize={"16px"} color="gray">{product_details}</Text>
                    </Box>


                    <Box padding={"10px 0px 10px 0px"} w="150px" h="auto" margin="10px" display={"flex"} gap="5px">
                        <Box>
                            <Text fontSize={"14px"} fontWeight={700} color="gray">Rating:{customer_rating}</Text>
                        </Box>
                        <Box>
                            <BiStar bg="teal" color='teal' size={20} />
                        </Box>
                    </Box>


                    <Box margin="10px" display={"flex"} gap="5px">
                        <Text fontSize={"24px"} fontWeight={700}>₹{price && price.sp}</Text>
                        <Text fontSize={"16px"} color="gray" textDecoration={"line-through"} padding="8px">MRP ₹{price && price.mrp}</Text>
                    </Box>

                    <Box margin="10px" display={"flex"} gap="5px">
                        <Text fontSize={"14px"} fontWeight={700} color="teal">inclusive of all taxes</Text>
                    </Box>

                    <Box margin="10px" gap="5px">
                        <FormLabel fontSize={"20px"} fontWeight={700}>Select Sizes</FormLabel>
                        <Select w="100px">
                            {sizes && sizes.map((el) => (
                                <option value={el}>{el}</option>
                            ))}
                        </Select>
                    </Box>


                    <Box margin="10px" display={"flex"} gap="20px">
                        <Button colorScheme={'pink'} size="lg">ADD TO BAG</Button>
                        <Button colorScheme={'pink'} size="lg" variant={"outline"}>ADD TO WISHLIST</Button>
                    </Box>
                </Box>
            </Box>

            <Footer />
        </div>
    )
}

export default ProductDetail


//





// 