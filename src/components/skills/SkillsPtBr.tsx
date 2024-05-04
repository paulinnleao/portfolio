import { Box, Image } from '@chakra-ui/react'

import ImagesSkills from './imagesSkills/ImageSkills.json'

const SkillsPtBr = () => {

  return <Box id='habilidades' p={'0 4rem'} bgColor={"#173053"} >
                <p style={{
                    color: '#FAFF00',
                    textAlign: 'center',
                    fontSize: '50px',
                    marginBottom: '20px',
                }}>Habilidades</p>
            <Box style={{
            display: 'flex',
            alignItems: 'center',
            gap: '50px',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
            }}>
            {
                ImagesSkills.skill.map((value, key)=> <Image
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

export default SkillsPtBr;