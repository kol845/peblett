import SettingsIcon from '@material-ui/icons/Settings';

import * as React from "react"

import PropTypes from "prop-types"

import styled from 'styled-components' 

import consts from '../constants/constants'

/*
The classname parameter allows this component to be externaly styled with styled-components
*/

const Loading = ({  style={} }) => {

  return (
    <Spinner style={style}>
      <StyledCogIcon/>
    </Spinner>
  )
}

Loading.propTypes = {
//   style:PropTypes.object  
}

export default Loading
const StyledCogIcon = styled(SettingsIcon)`
    fill: ${consts.colors.PRIMARY};
    animation: spinner 3s linear infinite;
    width:50%;
    height:50%;
`
const Spinner = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    width:100%;

    @keyframes spinner {
        to {transform: rotate(360deg);}
    }
    .spinner {
        margin-top: 30%;
        font-size: 600px;
        text-align: center;
    }
  
`