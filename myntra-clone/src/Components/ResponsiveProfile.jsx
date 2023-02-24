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

import React from 'react'

const ResponsiveProfile = () => {

    let isLoggedIn = false;

    return (
        <Menu>
            <MenuButton colorScheme={"pink"} variant="outline" as={Box}>
                <Box>
                    <Box marginLeft={"10px"}>
                        <CgProfile size={"20px"} />
                    </Box>
                </Box>
            </MenuButton>
            <MenuList>
                <Box>
                    {isLoggedIn ? (
                        <Box>
                            <Text padding={"0px 0px 0px 0px"} fontSize={"14px"} fontWeight={700} color={"#282C3F"}>Hello Umer</Text>
                            <Text padding={"0px 0px 0px 0px"} fontSize={"14px"} fontWeight={700} color={"#282C3F"}>7903438621</Text>
                            <Divider></Divider>
                        </Box>
                    ) : (
                        <Box>
                            <Text padding={"3px 3px 3px 0px"} fontSize={"14px"} fontWeight={700} color={"#3e4152"}>Welcome</Text>
                            <Text padding={"3px 3px 3px 0px"} fontSize={"14px"} color={"#282C3F"}>To access account and manage orders</Text>
                            <Button borderRadius={"0px"} height={"40px"} size="md" colorScheme={"pink"} variant="outline">LOGIN/SIGNUP</Button>
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
                <MenuItem fontSize={"13px"}>Logout</MenuItem>
            </MenuList>
        </Menu >
    )
}

export default ResponsiveProfile



