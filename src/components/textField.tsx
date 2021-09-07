import React from 'react';
import PropTypes from "prop-types"
import styled from 'styled-components' 

import TextField from '@material-ui/core/TextField';

import consts from '../constants/constants'

/*
The 'className' parameter allows this component to be externaly styled with styled-components
*/

const PebTextFiled = ({ id, label, onChange, value, type="text", style={}, size="small", className="" }) => {
    return (
    <React.Fragment>
        <StyledTextField className={className} length={size} id={id} label={label} variant="filled" type={type} value={value} style={style} onChange={onChange}/>
    </React.Fragment>
    )
}

PebTextFiled.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    onChange:PropTypes.func,
    value:PropTypes.string,
    className:PropTypes.string
  };
  

const StyledTextField = styled(TextField)<TextFieldProps>`
    width: ${(props) => (props.length=="full" ? "240px;" : props.length=="max" ? "25vw" : "14vw")};
    margin:10px 0px;
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
interface TextFieldProps {
    length: string;
  }
  
export default PebTextFiled;
