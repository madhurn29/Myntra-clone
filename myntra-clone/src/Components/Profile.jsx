import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box,
    Button,
    Text,
    Divider

} from '@chakra-ui/react'
import { CgProfile } from 'react-icons/cg';
import { Link } from "react-router-dom";

import React from 'react'

const Profile = () => {

    let isLoggedIn = JSON.parse(localStorage.getItem("isAuth")) || false
    let mobileNum = localStorage.getItem("MbNumber")
    // console.log('isLoggedIn:', typeof(isLoggedIn));

    const handleLogout = () => {
        localStorage.setItem("isAuth", false);
        window.location.reload();
    }



    return (
        <Menu>
            <MenuButton colorScheme={"pink"} variant="outline" as={Button}>
                <Box>
                    <Box marginLeft={"10px"}>
                        <CgProfile size={"20px"} />
                    </Box>
                    <Text fontSize={"14px"} fontWeight="700" color={"#282C3F"}>Profile</Text>
                </Box>
            </MenuButton>
            <MenuList>
                <Box>
                    {isLoggedIn ? (
                        <Box>
                            <Text padding={"0px 0px 0px 0px"} fontSize={"14px"} fontWeight={700} color={"#282C3F"}>User</Text>
                            <Text padding={"0px 0px 0px 0px"} fontSize={"14px"} fontWeight={700} color={"#282C3F"}>{mobileNum}</Text>
                            <Divider></Divider>
                        </Box>
                    ) : (
                        <Box>
                            <Text padding={"3px 3px 3px 0px"} fontSize={"14px"} fontWeight={700} color={"#3e4152"}>Welcome</Text>
                            <Text padding={"3px 3px 3px 0px"} fontSize={"13px"} color={"#282C3F"}>To access account and manage orders</Text>
                            <Link to="/signup">
                                <Button borderRadius={"0px"} height={"40px"} size="md" colorScheme={"pink"} variant="outline">LOGIN/SIGNUP</Button>
                            </Link>
                            <Divider padding={"3px 0px 3px 0px"}></Divider>
                        </Box>
                    )}
                </Box>

                <MenuItem fontSize={"13px"}>Order</MenuItem>
                <MenuItem fontSize={"13px"}>Wishlists</MenuItem>
                <MenuItem fontSize={"13px"}>Gifts Card</MenuItem>
                <MenuItem fontSize={"13px"}>Contact Us</MenuItem>
                <MenuItem fontSize={"13px"}>Myntra Insider</MenuItem>
                <Divider padding={"3px 0px 3px 0px"}></Divider>

                <MenuItem fontSize={"13px"}>Myntar Credits</MenuItem>
                <MenuItem fontSize={"13px"}>Coupons</MenuItem>
                <MenuItem fontSize={"13px"}>Saved Card</MenuItem>
                <MenuItem fontSize={"13px"}>Saved VPA</MenuItem>
                <MenuItem fontSize={"13px"}>Saved Addresses</MenuItem>
                <Divider padding={"3px 0px 3px 0px"}></Divider>

                <MenuItem fontSize={"13px"}>Edit Profile</MenuItem>

                <MenuItem onClick={handleLogout} fontSize={"13px"}>Logout</MenuItem>




            </MenuList>
        </Menu >
    )
}

export default Profile



