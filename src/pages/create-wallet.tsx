import React, { useEffect }  from 'react';
import styled from 'styled-components' 
import { navigate } from "gatsby";

import Seo from "../components/seo"
import Header from '../components/header';
import PasswordInputScreen from '../components/screens/passwordInputScreen'

import { getAddress } from '../utils/etherHandler'

const CreateWallet = () => {
  
  const next = async (password:string) =>{
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
        <Header text="Create Wallet"/>

        <PasswordInputScreen onSubmit={next}/>
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
