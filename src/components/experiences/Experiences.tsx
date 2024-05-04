import { Box, Image } from '@chakra-ui/react'
import Texts from '../util/Texts.json'

const Experiences = ({language} : any) => {
  return <Box id='experiences' p={'100px 4rem'} bgColor={"#173053"} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '50px'
                }}>
                    
            <Image style={{
                boxShadow: '-25px 25px 25px black'
            }} marginTop={100} boxSize={300} src='src/components/util/cat-work-laptop.gif' />
            <Box>
                <p style={{
                    color: '#FAFF00',
                    textAlign: 'center',
                    fontSize: '50px',
                    marginBottom: '20px',
                }}>{language ? 'Experiences' : 'Experiência'}</p>
                <p style={
                    {
                        textAlign: 'justify',
                        textJustify: 'inter-word'
                    }
                } >{language ? Texts.experiences : Texts.experiencias}</p>
            </Box>
    </Box>
}

export default Experiences;