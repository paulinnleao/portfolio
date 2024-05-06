import { Avatar, Box } from '@chakra-ui/react'

import Lion from './util/lion-icon.png'

const FloatButton = () => {
  return <Box 
            position={'fixed'}
            w={'60px'}
            h={'60px'}
            bottom={{base:'20px', md:'40px'}}
            right={{base:'20px', md:'40px'}}
            >
            <a href='#contact'><Avatar src={Lion} /></a>
        </Box>
}

export default FloatButton;