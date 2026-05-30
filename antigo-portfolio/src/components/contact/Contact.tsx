import { Box, Image } from '@chakra-ui/react'

import Github from './github.png'
import Linkedin from './linkedin.png'
import ZapZap from './zapzap.png'
import Mail from './mail.png'

const ContactIng = ({language}:any) => {
  return <Box id='contact'
              marginTop={{base:'100px'}}
              p={'0 4rem'} >
            <p style={{
                color: '#FAFF00',
                textAlign: 'center',
                fontSize: '50px',
                marginBottom: '20px',
            }}>{language ? 'Contact' : 'Contato'}</p>
          <Box style={{
            display: 'flex',
            alignItems: 'center',
            gap: '50px',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
            }}>
              <a href='https://github.com/paulinnleao'><Image src={Github} boxSize={100}/></a>
              <a href='https://www.linkedin.com/in/paulo-henrique-le%C3%A3o-646b891b6/'><Image src={Linkedin} boxSize={50}/></a>
              <a href='https://wa.me/5562994670109'><Image src={ZapZap} boxSize={75}/></a>
              <a href='mailto:phleaoliveira@gmail.com'><Image src={Mail} h={50} w={75}/></a>
            </Box>  
            <Box padding={30} textAlign={'center'}>
              {language ? 
                <p>Thank you for reading this far!</p>
                :
                <p>Obrigado por ler até aqui!</p>
              }
            </Box>
          </Box>
}

export default ContactIng