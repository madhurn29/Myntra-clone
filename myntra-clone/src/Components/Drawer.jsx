import { Button, Drawer, Text, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure, Divider } from "@chakra-ui/react"
import React from "react"
import { Link as RouterLink } from "react-router-dom";
import { RxHamburgerMenu } from 'react-icons/rx';


export default function DrawerComponent() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Text ref={btnRef} onClick={onOpen} cursor="pointer" fontWeight="500" fontSize="20px">
                <RxHamburgerMenu size={"20px"} />
            </Text>

            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Shop By Category</DrawerHeader>
                    <DrawerBody>
                        <Divider />
                        <RouterLink to="">
                            <Text onClick={onClose} padding="10px" color={"#282C3F"}>Men</Text>
                        </RouterLink>
                        <Divider />
                        <RouterLink to="">
                            <Text onClick={onClose} padding="10px" color={"#282C3F"}>Women</Text>
                        </RouterLink>
                        <Divider />
                        <Text padding="10px" color={"#282C3F"}>Kids</Text>
                        <Divider />
                        <RouterLink to="">
                            <Text onClick={onClose} padding="10px" color={"#282C3F"}>Home & Living</Text>
                        </RouterLink>
                        <Divider />
                        <Text padding="10px" color={"#282C3F"}>Myntra Studio</Text>
                        <Divider />
                        <Text padding="10px" color={"#282C3F"}>Myntra Mall</Text>
                        <Divider />
                        <Text padding="10px" color={"#282C3F"}>Myntra Insider</Text>
                        <Divider />
                        <Text padding="10px" color={"#282C3F"}>Gifts Cards</Text>
                        <Divider />
                        <Text padding="10px" color={"#282C3F"}>Contacts Us</Text>
                        <Divider />
                        <Text padding="10px" color={"#282C3F"}>FAQs</Text>
                        <Divider />
                        <Text padding="10px" color={"#282C3F"}>Legal</Text>
                        <Divider />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}