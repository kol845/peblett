import React from 'react';
import styled from 'styled-components' 

import { navigate } from "gatsby"

import Typography from '@material-ui/core/Typography';

import Seo from "../components/seo"
import consts from "../constants/constants"
import Button from '../components/button'

const Index = () => {
  const goCreate = ()=>{
    navigate('/create-wallet')
  }
  const goRestore = ()=>{
    navigate('/restore-wallet')
  }
  return(
    <RootContainer>
      <Seo title="Welcome"/>
      <ContentContainer>
        <Typography variant="h3" style={{color:consts.colors.PRIMARY}}>
            Peblett
        </Typography>
        <Underscore/>
        <Typography variant="h5" style={{margin:"30px"}}>
            Ethereum Wallet
        </Typography>
        <ButtonContainer>
            <Button text="Create Wallet" onClick={goCreate}/>
            <Button text="Restore Wallet" onClick={goRestore}/>
        </ButtonContainer>
      </ContentContainer>
    </RootContainer>
  )
}

export default Index

const RootContainer = styled.div`
  margin:auto;
  margin-top:30px;
  height:70vh;
  justify-content: center;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction:column;
  margin:auto;
  justify-content: center;
  height:100%;
  align-items:center;
`

const Underscore = styled.div`
  height: 12px;
  width: 100px;
  background-color: white;
  margin-top:-5px;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction:column;
`