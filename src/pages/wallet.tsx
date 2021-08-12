import React from 'react';
import styled from 'styled-components' 


import Seo from "../components/seo"

import Typography from '@material-ui/core/Typography';

import SettingsIcon from '@material-ui/icons/Settings';

import IconButton from '../components/iconButton';
import Button from '../components/button'
import consts from '../constants/constants'

const tmpAddr="0x2cb66D7ff39178B65c080aD2775687Bfa41fC97E"
const tmpBalance="0.0"

const shrinkAddr = (addr)=>{
    return (addr.slice(0,4)+"..."+addr.slice(-3))
}

const Wallet = () => {
  const shortAddr = shrinkAddr(tmpAddr)
  return(
    <RootContainer>
        <Seo title="Wallet"/>
        <ContentContainer>
        <HeaderContainer>
            <IconButton ariaLabel="Go to settings" style={{position:"absolute", left:"1%"}} Icon={ColoredSettingsIcon} onClick={()=>{}}/>
            <Typography variant="h6" style={{}}>
                {shortAddr}
            </Typography>
        </HeaderContainer>
        <Sperator/>
        <BodyContainer>
            <Typography variant="h4" style={{}}>
                    {tmpBalance + " ETH"}
            </Typography>
            <ButtonContainer>
                <Button text="Receive" onClick={()=>{}} size="half"/>
                <Button text="Send" onClick={()=>{}} size="half"/>
            </ButtonContainer>
        </BodyContainer>
        </ContentContainer>
    </RootContainer>
  )
}

export default Wallet

const ColoredSettingsIcon = styled(SettingsIcon)`
    color:${consts.colors.PRIMARY};
`
const Sperator = styled.div`
    background-color:white;
    width:100%;
    height:2px; 
`
const RootContainer = styled.div`
    margin:auto;
    margin-top:30px;
    justify-content: center;
    height:70vh;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction:column;
  margin:auto;
  justify-content: center;
  align-items:center;
  height:100%;
  &>* {
    margin:2vh;
  }
`

const BodyContainer = styled.div`
  display: flex;
  flex-direction:column;
  margin:auto;
  justify-content: center;
  align-items:center;
  &>* {
    margin:2vh 0px;
  }
`
const HeaderContainer = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items:center;
  width:100%;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction:row;
  &>Button {
    margin:0px 10px;
  }
`