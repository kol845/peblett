import React, { useState, useEffect } from 'react';
import styled from 'styled-components' 
import { navigate } from 'gatsby'

import Seo from "../components/seo"
import Header from '../components/header';
import Button from '../components/button'
import Loading from '../components/loading'
import PasswordInputScreen from '../components/screens/passwordInputScreen'

import { createWalletFromMnemonic, saveWallet } from '../utils/etherHandler'

import TextField from '@material-ui/core/TextField';

const RecoverWallet = ({ location }) => {
  let [mnemonic, setMnemonic] = useState<string>("")
  const [loading, setLoading] = useState<any>(false);

  const recover = async( password:string ) =>{
    setLoading(true);
    const wallet = await createWalletFromMnemonic(mnemonic)
    await saveWallet(wallet, password)
    navigate(
      "/wallet/",
    )
  }
  useEffect(()=>{
    if(location.state == null){
        navigate("/")
    }
    else{
        setMnemonic(location.state.mnemonic)
    }
  })
  return(
    <RootContainer>
      <Seo title="New Password"/>
      <ContentContainer>
      {loading ? <Loading/>:
      <>
        <Header text="New Password"/>

        <PasswordInputScreen onSubmit={recover}/>
      </>}
    </ContentContainer>
    </RootContainer>
  )
}

export default RecoverWallet

const StyledTextField = styled(TextField)`
  width:320px;
  
`
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