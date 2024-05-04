import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const ContactIng = () => {
  return <Box id='contact' p={'0 4rem'} bgColor={"#173053"} >
            <p style={{
                color: '#FAFF00',
                textAlign: 'center',
                fontSize: '50px',
                marginBottom: '20px',
            }}>Contact</p>
          <Box style={{
            display: 'flex',
            alignItems: 'center',
            gap: '50px',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
            }}>
              <Image src={"src/components/contact/github.png"} boxSize={100}/>
              <Image src={"src/components/contact/linkedin.png"} boxSize={100}/>
              <Image src={"src/components/contact/zapzap.png"} boxSize={100}/>
              <Image src={"src/components/contact/mail.png"} boxSize={100}/>
            </Box>  
            <Box padding={30} textAlign={'center'}>
              <p>Thank you for reading this far! I hope it helped you!</p>
            </Box>
          </Box>
}

export default ContactIng