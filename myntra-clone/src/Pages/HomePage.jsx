import { Box, Text, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Carousel from '../Components/Carousel'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { brandImg, clrsOfTheSeason, ctgToBagImg, dealofthedayImg, giftCards, luxeImg, topBrands, topPicks } from '../Components/utils'

const HomePage = () => {
  return (
    <>
      <Navbar />

      <Carousel />
      <Box>
        <Image margin={"30px 0px 30px 0px"} src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/5/72136cd8-6c52-4e7e-b8fa-9b42ea659fa01646450618634-DK-flat-4991-logo.jpg" />
      </Box>
      <Box margin={"50px 0px 10px 30px"}>
        <Text h="37px" fontWeight={700} fontSize={"28px"} color="#3e4152">DEAL OF THE DAY</Text>
      </Box>
      <Box cursor={"pointer"} w="100%" margin={"50px 0px 10px 0px"}>
        <SimpleGrid columns={{ base: 2, sm: 4, md: 8, lg: 8, xl: 8, "2xl": 8 }} spacing={2} >
          {dealofthedayImg.map((el, i) => {
            return <Image h="253px" w="170px" src={el} key={i} />
          })}
        </SimpleGrid>
      </Box>


      <Box margin={"50px 0px 10px 30px"}>
        <Text h="37px" fontWeight={700} fontSize={"28px"} color="#3e4152">BEST OF MYNTRA EXCLUSIVE BRANDS</Text>
      </Box>
      <Box cursor={"pointer"} w="100%" margin={"50px 0px 10px 0px"}>
        <SimpleGrid columns={{ base: 2, sm: 4, md: 8, lg: 8, xl: 8, "2xl": 8 }} spacing={2} >
          {brandImg.map((el, i) => {
            return <Image h="253px" w="170px" src={el} key={i} />
          })}
        </SimpleGrid>
      </Box>


      <Box margin={"50px 0px 10px 30px"}>
        <Text h="37px" fontWeight={700} fontSize={"28px"} color="#3e4152">TOP PICKS</Text>
      </Box>
      <Box cursor={"pointer"} w="100%" margin={"50px 0px 10px 0px"}>
        <SimpleGrid columns={{ base: 2, sm: 4, md: 8, lg: 7, xl: 7, "2xl": 7 }} spacing={0} >
          {topPicks.map((el, i) => {
            return <Image h="253px" w="170px" src={el} key={i} />
          })}
        </SimpleGrid>
      </Box>


      <Box margin={"50px 0px 10px 30px"}>
        <Text h="37px" fontWeight={700} fontSize={"28px"} color="#3e4152">CATEGORIES TO BAG</Text>
      </Box>
      <Box cursor={"pointer"} w="100%" margin={"50px 0px 10px 0px"}>
        <SimpleGrid columns={{ base: 2, sm: 4, md: 8, lg: 8, xl: 8, "2xl": 8 }} spacing={0} >
          {ctgToBagImg.map((el, i) => {
            return <Image src={el} key={i} />
          })}
        </SimpleGrid>
      </Box>


      <Box margin={"50px 0px 10px 30px"}>
        <Text h="37px" fontWeight={700} fontSize={"28px"} color="#3e4152">DEALS ON TOP BRANDS</Text>
      </Box>
      <Box cursor={"pointer"} w="100%" margin={"50px 0px 10px 0px"}>
        <SimpleGrid columns={{ base: 2, sm: 4, md: 8, lg: 8, xl: 8, "2xl": 8 }} spacing={0} >
          {topBrands.map((el,i) => {
            return <Image src={el} key={i} />
          })}
        </SimpleGrid>
      </Box>


      <Box margin={"50px 0px 10px 30px"}>
        <Text h="37px" fontWeight={700} fontSize={"28px"} color="#3e4152">MYNTRA LUXE</Text>
      </Box>
      <Box cursor={"pointer"} w="100%" margin={"50px 0px 10px 0px"}>
        <SimpleGrid columns={{ base: 2, sm: 4, md: 8, lg: 8, xl: 8, "2xl": 8 }} spacing={0} >
          {luxeImg.map((el,i) => {
            return <Image src={el} key={i} />
          })}
        </SimpleGrid>
      </Box>


      <Box margin={"50px 0px 10px 30px"}>
        <Text h="37px" fontWeight={700} fontSize={"28px"} color="#3e4152">GIFTING CARDS</Text>
      </Box>
      <Box cursor={"pointer"} w="100%" margin={"50px 0px 10px 0px"}>
        <SimpleGrid columns={{ base: 2, sm: 4, md: 4, lg: 4, xl: 4, "2xl": 4 }} spacing={0} >
          {giftCards.map((el,i) => {
            return <Image src={el} key={i} />
          })}
        </SimpleGrid>
      </Box>


      <Box margin={"50px 0px 10px 30px"}>
        <Text h="37px" fontWeight={700} fontSize={"28px"} color="#3e4152">COLOURS OF THE SEASON</Text>
      </Box>
      <Box cursor={"pointer"} w="100%" margin={"50px 0px 10px 0px"}>
        <SimpleGrid columns={{ base: 2, sm: 4, md: 4, lg: 4, xl: 4, "2xl": 4 }} spacing={0} >
          {clrsOfTheSeason.map((el,i) => {
            return <Image src={el} key={i} />
          })}
        </SimpleGrid>
      </Box>

      <Footer />

    </>
  )
}

export default HomePage