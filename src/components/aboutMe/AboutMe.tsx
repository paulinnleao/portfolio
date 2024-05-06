import { Box, Flex, Image } from '@chakra-ui/react'
import Texts from '../util/Texts.json'

import '../util/FontGlobal.css'

import MySelf from '../util/MySelf.png'
import FooterTrees from '../util/Footer-trees.png'

const AboutMe = ({language}:any) => {
  return <><Box 
                id='aboutMe'
                padding={{base: '0 1rem', md:'0 4rem'}} >
            <Flex display={{base: 'column', md: 'flex'}}>
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
                <Image 
                    boxShadow={'25px 25px 25px black'}
                    boxSize={{base: 350, md: 500}}
                    marginBottom={{base: '100px', md: 0}}
                    src={MySelf} />
            </Flex>
            
  </Box>
  <Image transform={'scale(3.8)'} src={FooterTrees}/>
  </>
}

export default AboutMe;