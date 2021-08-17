import * as React from "react"
import { navigate } from "gatsby";

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import styled from 'styled-components' 

import IconButton from './iconButton';

import consts from '../constants/constants'

const BackButton = ({  }) => {

  return (
    <StyledIconButton ariaLabel="Go back" style={{position:"absolute"}} Icon={ArrowBackIcon} onClick={()=>{navigate(-1)}}/>
  )
}

export default BackButton

const StyledIconButton = styled(IconButton)`
  possition:absolute;
  left: 32%;
  @media (max-width: ${consts.media.TABLET}) {
    left: 20%;
  }
  @media (max-width: ${consts.media.MOBILE}) {
    left: 5%;
  }
`