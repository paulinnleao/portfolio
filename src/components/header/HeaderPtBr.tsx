import { Box, IconButton} from '@chakra-ui/react'
import { US, BR } from 'country-flag-icons/react/3x2'

import './Header.css';

const HeaderPtBr = ({setLanguage}:any) => {
  return <Box     bgColor={"#173053"}        style={{
                position: 'sticky',
                top: '0',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0 4rem',
                alignItems: 'center'
            }}
          >
            <Box style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '10px',
            }}>
                <a style={{
                    fontSize:'55px',
                    fontFamily: "'Aldrich', sans-serif",
                    color: '#fff',
                }} >PH</a> <a style={{
                    color:'#FAFF00',
                    fontSize: '55px'
                }} >Leão</a>
                <IconButton _hover={{
                    backgroundColor:'rgba(0,0,0,0)'
                }} aria-label='Fodase' onClick={()=>setLanguage(false)} w={8} h={8} as={BR} bgColor={'rgba(0,0,0,0)'} />
                <IconButton  _hover={{
                    backgroundColor:'rgba(0,0,0,0)'
                }} aria-label='Fodase' onClick={()=>setLanguage(true)} w={8} h={8} as={US} bgColor={'rgba(0,0,0,0)'}  />
                
            </Box>
            <Box
                style={{
                    display: 'flex',
                    gap: '50px',
                    color: '#FAFF00',
                }}
            >
                <a style={{
                    color: '#fff'
                }} href="#sobreMim">Sobre mim</a>
                <a href="#experiencias">Experiências</a>
                <a href="#habilidades">Habilidades</a>
                <a href="#contato">Contato</a>
            </Box>
  </Box>
}

export default HeaderPtBr;