import { Box } from '@chakra-ui/react'
import { ArrowUpDownIcon, CloseIcon, MinusIcon, TriangleDownIcon} from '@chakra-ui/icons'

import '../util/FontGlobal.css'

const HomePagePtBr = () => {
  return <Box 
          w={'100%'}
          h={'100%'}
          bg='#173053'
          padding={'0 4rem'}
          >
        <Box>
          <Box
            style={{
              backgroundColor: '#000',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '1px 10px'
            }}
          >
            <p>Hello World!</p>
            <Box>
              <MinusIcon _hover={{
                backgroundColor : 'rgba(255, 255, 255, 0.5)',
              }} color={'#fff'}/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ArrowUpDownIcon _hover={{
                backgroundColor : 'rgba(255, 255, 255, 0.5)',
              }}  color={'#fff'}/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <CloseIcon _hover={{
                backgroundColor : 'red',
              }}  color={'#fff'}/>
            </Box>
          </Box>
        </Box>
        <Box
          m={'auto'}
          bg={'#000'}
          color={'#fff'}
          padding={'10px'}
        >
          <p>&gt;</p>
          <p>Olá! Como vai você?!</p>
          <p>Eu sou o</p>
          <p style={{
            fontSize: '50px',
            color: '#FAFF00',
            fontFamily: 'Aldrich',
            textTransform: 'uppercase',
            marginLeft: '60px',
          }}>Paulo Henrique Leão de Oliveira</p>
          <p>Um desenvolvedor Full-Stack.</p>
          <p>Bem vindo ao meu portifólio! Clique na seta para ler mais.</p>
        </Box>
        <Box
          style={{
            height: '350px',
            margin:'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TriangleDownIcon w={100} h={100} color={'#FDFF95'}/>
        </Box>
    </Box>
}

export default HomePagePtBr;