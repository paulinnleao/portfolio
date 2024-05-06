import { Box, Flex, Image } from '@chakra-ui/react'
import Texts from '../util/Texts.json'

import Cat from '../util/cat-work-laptop.gif'

const Experiences = ({language} : any) => {
  return <Flex 
            id='experiences'
            padding={{base: '0 1rem', md:'0 4rem'}}
            alignItems={'center'}            
            gap={'50px'}
            display={{base: 'column', md: 'flex'}}
            >
                    
            <Image 
                boxShadow={'-25px 25px 25px black'}
                marginTop={100}
                boxSize={{base: 350, md: 500}}
                marginBottom={{base: 10, md: 0}}
                src={Cat} />
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
    </Flex>
}

export default Experiences;