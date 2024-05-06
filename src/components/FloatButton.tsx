import { Avatar, Box } from '@chakra-ui/react'
import styled from 'styled-components';

import Lion from './util/lion-icon.png'

const FloatButton = () => {
  return <BoxFloat>
            <Avatar src={Lion} />
        </BoxFloat>
}

export default FloatButton;

const BoxFloat = styled(Box)`
    position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
`;