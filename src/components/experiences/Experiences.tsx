import { Box, Flex, Image } from '@chakra-ui/react'
import Texts from '../util/Texts.json'

import Cat from '../util/cat-work-laptop.gif'

const Experiences = ({language} : any) => {
  return <Flex 
            id='experiences'
            padding={{base: '0 1rem', md:'0 4rem'}}
            alignItems={'center'}            
            gap={'50px'}
            display={{base: 'column', lg: 'flex'}}
            marginTop={{base:'100px'}}
            >
                    
            <Image 
                margin={'auto'}
                display={{base: 'none', lg: 'block'}}
                boxShadow={'-25px 25px 25px black'}
                boxSize={{base: 350, md: 500}}
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
                    
                    <Image 
                        margin={'auto'}
                        display={{base:'block',lg: 'none'}}
                        boxShadow={'-25px 25px 25px black'}
                        boxSize={{base: 350, md: 500}}
                        src={Cat} />
    </Flex>
}

export default Experiences;