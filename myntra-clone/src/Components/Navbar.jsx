import {
  Box,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';
import SearchBox from './SearchBox';
import { useState } from 'react';
import styles from "../styles/Navbar.module.css"
import { Link as RouterLink } from "react-router-dom"
import { BsHeart } from 'react-icons/bs';
import { BsHandbag } from 'react-icons/bs';
import DrawerComponent from './Drawer';
import PopupMen from './PopupMen';
import Popupwomen from './Popupwomen';
import Profile from './Profile';
import ResponsiveProfile from './ResponsiveProfile';



export default function Navbar() {


  const [isVisible, setIsVisible] = useState(false);
  const [isPopupWomen, setPopupWomen] = useState(false);


  return (
    <>
      {/* Desktop Navbar */}
      <Box position={"sticky"} top="0px" zIndex={1000} margin={"auto"} display={"flex"} bg="#ffffff" className={styles.desktop_navbar} width="100%" height="80px">
        <Box display={"flex"} gap={"25px"}>
          <RouterLink to="/">
            <Box>
              <Image marginTop="8px" marginLeft={"30px"} w="60px" h="60px" src="https://aartisto.com/wp-content/uploads/2020/11/myntra.png" />
            </Box>
          </RouterLink>

          <Box
            className={styles.men}
            padding="25px 10px 25px 10px"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            height="100%"
          >
            <Text fontSize={"14px"} fontWeight="700" color={"#282C3F"}>MEN</Text>
          </Box>

          <Box
            className={styles.women}
            padding="25px 5px 25px 5px"
            onMouseEnter={() => setPopupWomen(true)}
            onMouseLeave={() => setPopupWomen(false)}
          >
            <Text fontSize={"14px"} fontWeight="700" color={"#282C3F"}>WOMEN</Text>
          </Box>


          <Box
            className={styles.men}
            padding="25px 10px 25px 10px"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          >
            <Text fontSize={"14px"} fontWeight="700" color={"#282C3F"}>KIDS</Text>
          </Box>

          <Box padding="25px 0px 25px 0px">
            <Text fontSize={"14px"} fontWeight="700" color={"#282C3F"}>HOME & LIVING</Text>
          </Box>

          <Box padding="25px 0 25px 0">
            <Text fontSize={"14px"} fontWeight="700" color={"#282C3F"}>BEAUTY</Text>
          </Box>

          <Box padding="25px 0px 25px 0px">
            <Text fontSize={"14px"} fontWeight="700" color={"#282C3F"}>STUDIO</Text>
          </Box>
        </Box>

        <Box marginLeft={"130px"}>
          <Flex>
            <SearchBox />
            <Flex padding={"15px 0px 15px 0px"} gap={"25px"}>
              <Profile />
              <Box>
                <Box marginLeft={"15px"}>
                  <BsHeart size={"20px"} />
                </Box>
                <Text fontSize={"14px"} fontWeight="700" color={"#282C3F"}>Wishlist</Text>
              </Box>
              <Box>
                <Box marginLeft={"5px"}>
                  <BsHandbag size={"20px"} />
                </Box>
                <Text fontSize={"14px"} fontWeight="700" color={"#282C3F"}>Bag</Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>


      {/* Mobile Navbar */}
      <Box position={"sticky"} top="0px" zIndex={1000} display={"flex"} justifyContent="space-between" bg="#ffffff" padding={"13px"} className={styles.mobile_navbar} width="100%" margin={"auto"}>
        <Box>
          <Flex gap="15px">
            <DrawerComponent />
            <RouterLink to="/">
              <Text fontSize={"14px"} fontWeight="700" color={"#282C3F"}>Myntra</Text>
            </RouterLink>
          </Flex>
        </Box>

        <Box display={"flex"} gap="20px">
          <Flex >
            <ResponsiveProfile />
          </Flex>
          <Flex>
            <BsHeart size={"20px"} />
          </Flex>
          <Flex>
            <BsHandbag size={"20px"} />
          </Flex>
        </Box>
      </Box>

      <PopupMen isVisible={isVisible} />
      <Popupwomen isVisible={isPopupWomen} />
    </>
  )
}



