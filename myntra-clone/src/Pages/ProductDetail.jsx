import { Box, Button, FormLabel, Image, Select, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { useDispatch, useSelector } from "react-redux"
import { BiStar } from 'react-icons/bi';
import { addTocartData, getRequestforAdminSide } from "../Redux/AdminReducer/action.js"




const ProductDetail = () => {

    let ParamsIdCateg = useParams();
    let params = ParamsIdCateg.id
    let [id, category] = params.split("-");
    const [data, setData] = useState({});
    const dispatch = useDispatch();
    let toast = useToast();

    const mensJeans = useSelector((store) => store.AdminReducer.mens_jeans);
    const mensTshirt = useSelector((store) => store.AdminReducer.mens_tshirt);
    const womensKurtas = useSelector((store) => store.AdminReducer.womens_kurtas);
    const womensTops = useSelector((store) => store.AdminReducer.womens_tops);


    const { name, product_details, customer_rating, price, sizes, images, } = data



    const handleAddToCart = () => {
        toast({
            description: "Added to your bag",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top",
        });
        let obj = { name, product_details, customer_rating, price, sizes, images, "quantity": 1 }
        dispatch(addTocartData(obj));

    };

    useEffect(() => {
        if (mensJeans.length == 0) {
            dispatch(getRequestforAdminSide({}, "men-jeans"));
            // console.log(mensJeans);
        } else if (mensTshirt.length == 0) {
            dispatch(getRequestforAdminSide({}, "men-t-shirts"));
        } else if (womensKurtas.length == 0) {
            dispatch(getRequestforAdminSide({}, "women-kurtas-suits"));
        } else if (womensTops.length == 0) {
            dispatch(getRequestforAdminSide({}, "women-tops"));
        }
    }, [mensJeans, mensTshirt, womensKurtas, womensTops]);

    useEffect(() => {
        if (category === "menJeans" && mensJeans.length > 0) {
            let productData = mensJeans.find((el) => el.id === +id);
            setData(productData);
        }

        if (category === "mensTshirt" && mensTshirt.length > 0) {
            let productData = mensTshirt.find((el) => el.id === +id);
            setData(productData);
        }
        if (category === "womensKurtas" && womensKurtas.length > 0) {
            let productData = womensKurtas.find((el) => el.id === +id);
            setData(productData);
        }
        if (category === "womensTops" && womensTops.length > 0) {
            let productData = womensTops.find((el) => el.id === +id);
            setData(productData);
        }
    }, [mensJeans, mensTshirt, womensKurtas, womensTops]);

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
                            {sizes && sizes.map((el, i) => (
                                <option key={i} value={el}>{el}</option>
                            ))}
                        </Select>
                    </Box>


                    <Box margin="10px" display={"flex"} gap="20px">
                        <Box>
                            <Button onClick={handleAddToCart} colorScheme={'pink'} size="lg">ADD TO BAG</Button>
                        </Box>
                        <Box>
                            <Button colorScheme={'pink'} size="lg" variant={"outline"}>ADD TO WISHLIST</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Footer />
        </div>
    )
}

export default ProductDetail


