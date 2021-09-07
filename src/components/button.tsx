import React from 'react';
import PropTypes from "prop-types"
import styled from 'styled-components' 

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import consts from '../constants/constants'

`
Sizes:
full => 240px
max => 25vw
other => 14vw

`


const StyledButton = styled(Button)<ButtonProps>`
  width: ${(props) => (props.length=="full" ? "240px;" : props.length=="max" ? "25vw" : "14vw")};

  margin:20px 0px;
  text-transform: none;
  font-size:18px;
  border-radius:10px;
  ${(props) => (props.length=="full" ? "": `
    @media (max-width: ${consts.media.TABLET}) {
      width:25vw;
    }
    @media (max-width: ${consts.media.MOBILE}) {
      width:40vw;
    }
  `)}
`

const PebButton = ({ text, onClick, style={}, size="full", secondary=false }) => {
  return (
    <React.Fragment>
      <StyledButton length={size} variant={secondary?'outlined':'contained'} color='primary' onClick={onClick} style={{...style}}>
        <Typography variant="h5">
            {text}
        </Typography>
      </StyledButton>
    </React.Fragment>
  )
}

PebButton.propTypes = {
    text: PropTypes.string,
    onClick:PropTypes.func,
    style:PropTypes.object,
    size:PropTypes.string,
  }

interface ButtonProps {
  length: string;
}



export default PebButton
