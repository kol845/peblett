import * as React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components' 

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import consts from '../constants/constants'
import ClipboardButton from './clipboardButton'

import IconButton from '@material-ui/core/IconButton';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const RecoveryBox = ({ recPhrase }) => {
    const copyToClipboard = ()=> {
        window.navigator.clipboard.writeText(recPhrase)
    }

    return (
        <RotContainer>
            <BoxContainer>
                <Text>
                    {recPhrase}
                </Text>
                <StyledIconButton aria-label="Copy to clipboard" onClick={copyToClipboard}>
                    <FileCopyIcon fontSize="large"/>
                </StyledIconButton>
            </BoxContainer>
        </RotContainer>
    )
}
const StyledIconButton = styled(IconButton)`
    position:absolute;
    left: 60%;
`

const Text = styled(Typography)`
    word-spacing: 16px;
`
const RotContainer = styled(Paper)`
    background-color:${consts.colors.GRAY};

`
const BoxContainer = styled.div`
    padding:80px 8vw;
`
RecoveryBox.propTypes = {
    recPhrase:PropTypes.string.isRequired
  }
  

export default RecoveryBox
