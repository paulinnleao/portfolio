import { Box, Image } from '@chakra-ui/react'
import Texts from '../util/Texts.json'

import '../util/FontGlobal.css'


const AboutMe = ({language}:any) => {
  return <><Box id='aboutMe' p={'100px 4rem'} bgColor={"#173053"}>
            <Box style={{
                display: 'flex'
                }}
            >
            <Box>
                <p style={{
                    color: '#FAFF00',
                    textAlign: 'center',
                    fontSize: '50px',
                    marginBottom: '20px',
                }}>{language ? 'About me' : 'Sobre mim'}</p>
                <p>{language ? Texts.aboutMe.fistP : Texts.sobreMim.primeiroP}</p>
                <p style={
                    {
                        textAlign: 'justify',
                        textJustify: 'inter-word'
                    }
                }>{language ? Texts.aboutMe.secondP : Texts.sobreMim.segundoP}</p>
            </Box>
            <Image style={{
                boxShadow: '25px 25px 25px black'
            }} boxSize={500} src='./src/components/util/MySelf.png' />
            </Box>
            
  </Box>
  <Image bgColor={"#173053"} w={'100%'} src='./src/components/util/Footer-trees.png'/>
  </>
}

export default AboutMe;