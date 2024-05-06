import { Flex, IconButton, Link, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react'
import { US, BR } from 'country-flag-icons/react/3x2'

import './Header.css';
import { HamburgerIcon } from '@chakra-ui/icons';

const Header = ({setLanguage, language}:any) => {
  return <Flex  
            bgColor={"#173053"}
            top={0} 
            position={'sticky'} 
            justifyContent={'space-between'} 
            padding={{base: '0 1rem', md:'0 4rem'}}
            alignItems={'center'}
            >
            <Flex alignItems={'base-line'} gap={'10px'} >
                <Link 
                    fontSize={{base: '30px' , md: '55px'}} 
                    fontFamily={"'Aldrich', sans-serif"} 
                    color={'#fff'} 
                    href="#"> PH </Link>
                <Link
                    color={'#FAFF00'}
                    fontSize={{base: '30px' , md: '55px'}} 
                    href="#"
                    > Leão </Link>
                <IconButton _hover={{
                    backgroundColor:'rgba(0,0,0,0)',
                    cursor: 'pointer'
                }} aria-label='BR' onClick={()=>setLanguage(false)} w={8} h={8} as={BR} bgColor={'rgba(0,0,0,0)'} />
                <IconButton  _hover={{
                    backgroundColor:'rgba(0,0,0,0)',
                    cursor: 'pointer'
                }} aria-label='US' onClick={()=>setLanguage(true)} w={8} h={8} as={US} bgColor={'rgba(0,0,0,0)'}  />
                
            </Flex>
            <Flex gap={'50px'} color={"#FAFF00"} display={{base: 'none', md: 'flex'}} >
                <a style={{
                    color: '#fff'
                }} href="#aboutMe">{language ? 'About me' : 'Sobre mim'}</a>
                <a href="#experiences">{language ? 'Experiences' : 'Experiências'}</a>
                <a href="#skills">{language ? 'Skills' : 'Habilidades'}</a>
                <a href="#contact">{language ? 'Contact' : 'Contato'}</a>
            </Flex>
            <Menu>
                <MenuButton as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline' 
                            bgColor={"white"}
                            marginLeft={'10px'}
                            />
                            <MenuList>
                                <MenuItem color={'white'} bgColor={"#173053"} padding={'10px'} >
                                    <a href="#aboutMe">{language ? 'About me' : 'Sobre mim'}</a>
                                </MenuItem>
                                <MenuItem color={'white'} bgColor={"#173053"} padding={'10px'} >
                                    <a href="#experiences">{language ? 'Experiences' : 'Experiências'}</a>
                                </MenuItem>
                                <MenuItem color={'white'} bgColor={"#173053"} padding={'10px'} >
                                    <a href="#skills">{language ? 'Skills' : 'Habilidades'}</a>
                                </MenuItem>
                                <MenuItem color={'white'} bgColor={"#173053"} padding={'10px'} >
                                    <a href="#contact">{language ? 'Contact' : 'Contato'}</a>
                                </MenuItem>
                            </MenuList>
            </Menu>
  </Flex>
}

export default Header;