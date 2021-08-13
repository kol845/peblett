import React from 'react';
import PropTypes from "prop-types"
import styled from 'styled-components' 

import TextField from '@material-ui/core/TextField';

const PebTextFiled = ({ id, label, onChange, value }) => {
    return (
    <React.Fragment>
        <StyledTextField id={id} label={label} variant="filled" type="password" value={value} onChange={onChange}/>
    </React.Fragment>
    )
}

PebTextFiled.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    onChange:PropTypes.func,
    value:PropTypes.string
  };
  

const StyledTextField = styled(TextField)`
    width:240px;
    margin:10px 0px;
    text-transform: none;
    font-size:18px;
    border-radius:10px;

`

export default PebTextFiled;
