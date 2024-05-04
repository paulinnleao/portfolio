import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Texts from '../util/Texts.json'

const ExperiencesPtBr = () => {
  return <Box id='experiencias' p={'100px 4rem'} bgColor={"#173053"} style={{
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
                }}>Experiências</p>
                <p style={
                    {
                        textAlign: 'justify',
                        textJustify: 'inter-word'
                    }
                } >{Texts.experiencias}</p>
            </Box>
    </Box>
}

export default ExperiencesPtBr;