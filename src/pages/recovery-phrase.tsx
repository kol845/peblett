import React from 'react';
import styled from 'styled-components' 
import { navigate } from "gatsby";

import Typography from '@material-ui/core/Typography';

import Seo from "../components/seo"
import BackButton from '../components/backButton';
import Button from '../components/button'
import RecoveryBox from '../components/recoveryBox'
import consts from '../constants/constants'

const tmpRecPhrase="witch collapse practice feed shame open despair creek road again ice least"

const RecoveryPhrase = () => {
  
  return(
    <RootContainer>
      <Seo title="Recovery Seed"/>
      <ContentContainer>
        <HeaderContainer>
        <BackButton/>
          <Typography variant="h5" style={{textDecoration: "underline"}}>
            Recovery Seed Phrase
          </Typography>
        </HeaderContainer>
        <RecoveryBox recPhrase={tmpRecPhrase}/>
        <Typography variant="subtitle1" style={{width:"50%", textAlign:"center"}}>
          <span style={{fontWeight:"bold", color:consts.colors.PRIMARY}}>Important:</span> Write down this recovery seed phrase somewere safe.
        </Typography>
        <Button text="Done" onClick={()=>{navigate("/wallet")}} />
    </ContentContainer>
    </RootContainer>
  )
}
export default RecoveryPhrase

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
  justify-content:center;
  align-items:center;
  height:100%;
  &>* {
    margin:2vh;
  }

`
const HeaderContainer = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items:center;
  width:100%;
`