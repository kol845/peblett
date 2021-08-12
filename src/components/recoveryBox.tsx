import * as React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components' 

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import consts from '../constants/constants'
import ClipboardButton from './clipboardButton'

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
                <ClipboardButton onClick={copyToClipboard} style={{position:"absolute", left:"70%"}}/>
            </BoxContainer>
        </RotContainer>
    )
}

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
