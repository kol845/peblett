import * as React from "react"
import { navigate } from "gatsby";

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import styled from 'styled-components' 

import IconButton from './iconButton';

import consts from '../constants/constants'

/*
The classname parameter allows this component to be externaly styled with styled-components
*/

const navBack = ()=>{
  navigate(-1)
}

const BackButton = ({ className="", onClick=navBack }) => {

  return (
    <StyledIconButton className={className} ariaLabel="Go back" style={{position:"absolute"}} Icon={ArrowBackIcon} onClick={onClick}/>
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