import React from 'react';
import styled from 'styled-components' 
import { navigate } from "gatsby";

import Typography from '@material-ui/core/Typography';

import Seo from "../components/seo"
import TextField from '../components/textField';
import BackButton from '../components/backButton';
import Button from '../components/button'

const CreateWallet = () => {
  return(
    <RootContainer>
      <Seo title="Create Wallet"/>
      <ContentContainer>
        <HeaderContainer>
        <BackButton />
          <Typography variant="h3" style={{textDecoration: "underline"}}>
              Create Wallet
          </Typography>
        </HeaderContainer>
        <Form noValidate autoComplete="off">
          <TextFiledContainer>
            <TextField id="password" label="Password" />
            <TextField id="rePassword" label="Confirm Password"/>
          </TextFiledContainer>
          <Button text="Create" onClick={()=>{navigate("/recovery-phrase")}} />
        </Form>
    </ContentContainer>
    </RootContainer>
  )
}

export default CreateWallet

const RootContainer = styled.div`
  margin:auto;
  margin-top:30px;
  height:70vh;
  justify-content: center;

`
const Form = styled.form`
  display: flex;
  flex-direction:column;
  justify-content:space-between;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction:column;
  margin:auto;
  justify-content:center;
  align-items:center;
  height:100%;
  &>* {
    margin:30px;
  }
`
const TextFiledContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items:center;
  width:100%;
  
  
`