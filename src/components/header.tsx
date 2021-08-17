import React from 'react';
import PropTypes from "prop-types"
import styled from 'styled-components' 

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BackButton from './backButton';


import consts from '../constants/constants'


const Header = ({ text }) => {
  return (
    <HeaderContainer>
        <BackButton />
        <Typography variant="h3" style={{textDecoration: "underline"}}>
            {text}
        </Typography>
    </HeaderContainer>
  )
}

Header.propTypes = {

  }




export default Header

const HeaderContainer = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items:center;
  max-width:70%;
`