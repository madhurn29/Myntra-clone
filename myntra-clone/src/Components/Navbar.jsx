import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Image,
    Text,
} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import SearchBox from './SearchBox';
import "./Dymmy.css"
import { useState } from 'react';
// const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [toggle, setToggle] = useState(false);
    // console.log("dfdfs")

    return (
        <>
            <Box padding={"10px"} bg="#ffffff" px={4} w="90%" margin={"auto"}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>
                            <Image w="53px" h="46px" src="https://img.theweek.in/content/dam/week/news/myntra.jpg" alt="logo" />
                        </Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            <Text>MEN</Text>
                            <Text>WOMEN</Text>
                            <Text>KIDS</Text>
                            <Text>HOME & LIVING</Text>
                            <Text>BEAUTY</Text>
                            <Text>STUDIO</Text>
                        </HStack>
                    </HStack>



                    <Flex alignItems={'center'}>
                        {/* {isOpen ? <SearchBox /> : null} */}
                        {
                            toggle ? <div className='hideinput'>
                                <SearchBox /> <p onClick={() => setToggle(false)}>close</p>
                            </div> :
                                <div className='hideSearchBarMobile hideinput' onClick={() => setToggle(true)} >

                                    button

                                </div>
                        }
                        
                        <div className='hideSearchBar'>
                            <SearchBox />
                        </div>


                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                    }
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Link 1</MenuItem>
                                <MenuItem>Link 2</MenuItem>
                                <MenuDivider />
                                <MenuItem>Link 3</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>

                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            <Text>MEN</Text>
                            <Text>WOMEN</Text>
                            <Text>KIDS</Text>
                            <Text>HOME & LIVING</Text>
                            <Text>BEAUTY</Text>
                            <Text>STUDIO</Text>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}

