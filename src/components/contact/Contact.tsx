import { Box, Image } from '@chakra-ui/react'

import Github from './github.png'
import Linkedin from './linkedin.png'
import ZapZap from './zapzap.png'
import Mail from './mail.png'

const ContactIng = ({language}:any) => {
  return <Box id='contact' p={'0 4rem'} bgColor={"#173053"} >
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
              <Image src={Github} boxSize={100}/>
              <Image src={Linkedin} boxSize={100}/>
              <Image src={ZapZap} boxSize={100}/>
              <Image src={Mail} boxSize={100}/>
            </Box>  
            <Box padding={30} textAlign={'center'}>
              {language ? 
                <p>Thank you for reading this far! I hope it helped you!</p>
                :
                <p>Obrigado por ler até aqui! Espero tê-lo ajudado em algo!</p>
              }
            </Box>
          </Box>
}

export default ContactIng