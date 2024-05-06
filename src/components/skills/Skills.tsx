import { Box, Image } from '@chakra-ui/react'

import { ImageSkills } from './imagesSkills/ImageSkills';

const SkillsIng = ({language}:any) => {

  return <Box id='skills' p={'0 4rem'} bgColor={"#173053"} >
                <p style={{
                    color: '#FAFF00',
                    textAlign: 'center',
                    fontSize: '50px',
                    marginBottom: '20px',
                }}>{language ? 'Skills' : 'Habilidades'}</p>
            <Box style={{
            display: 'flex',
            alignItems: 'center',
            gap: '50px',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
            }}>
            {
                ImageSkills.map((value, key)=> <Image
                                                 src={value} 
                                                 key={key}
                                                 boxSize={106}
                                                 _hover={{
                                                 }}
                                                 />)
            }
        </Box>
    </Box>
}

export default SkillsIng