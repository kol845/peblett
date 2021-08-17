import React, { useState, useEffect }  from 'react';
import styled from 'styled-components' 
import { navigate, Link } from "gatsby";

import Typography from '@material-ui/core/Typography';

import Seo from "../components/seo"
import TextField from '../components/textField';
import BackButton from '../components/backButton';
import Button from '../components/button'
import { createWallet, saveWallet, encryptWallet } from '../utils/etherHandler'
import { getAddress } from '../utils/etherHandler'

const CreateWallet = () => {
  let [password, setPassword] = useState("")
  let [confirmPassword, setConfirmPassword] = useState("")
  
  const next = async ()=>{
    navigate(
      "/recovery-phrase/",
      {
        state:{
          password:password,
        },
      }
    )
  }
  useEffect(()=>{
    if(getAddress())// If wallet already exists
    navigate(
      "/wallet/",
    )
  })
  
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
            <TextField id="password" label="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <TextField id="confirmPassword" label="Confirm Password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
          </TextFiledContainer>
          <Button text="Create" onClick={()=>{ next() }} />
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