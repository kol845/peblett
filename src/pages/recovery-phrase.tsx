import React, { useState, useEffect } from 'react';
import styled from 'styled-components' 
import { navigate } from "gatsby";

import Typography from '@material-ui/core/Typography';

import Seo from "../components/seo"
import Header from '../components/header';
import Button from '../components/button'
import RecoveryBox from '../components/recoveryBox'
import Loading from '../components/loading'

import consts from '../constants/constants'
import { createWallet, saveWallet, getAddress } from '../utils/etherHandler'

// const tmpRecPhrase="witch collapse practice feed shame open despair creek road again ice least"

const RecoveryPhrase = ({ location }) => {
  // const [wallet, setWallet] = useState({});
  const [wallet, setWallet] = useState<any>(null);
  const [loading, setLoading] = useState<any>(false);
  let password = location.state ? location.state.password:null;

  const next = async()=>{
    setLoading(true);
    await saveWallet(wallet, password)
    navigate(
      "/wallet/",
    )
  }
  const initiateWallet = async ()=>{
    setWallet(await createWallet())
  }

  useEffect(() => {
    if(location.state == null){
      navigate("/")
    }
    if(getAddress())navigate("/wallet/")// If wallet already exists
    initiateWallet()
  }, []);
  let recPhrase = wallet!=null ? wallet._mnemonic().phrase:"loading...";

  return(
    <RootContainer>
      <Seo title="Recovery Seed"/>
      <ContentContainer>
        {loading ? <Loading/>:
        <>
        <Header text="Recovery Seed Phrase"/>

          <RecoveryBox recPhrase={recPhrase}/>
          <Typography variant="subtitle1" style={{width:"50%", textAlign:"center"}}>
            <span style={{fontWeight:"bold", color:consts.colors.PRIMARY}}>Important:</span> Write down this recovery seed phrase somewere safe.
          </Typography>
          <Button text="Done" onClick={()=>{next()}} />     
        </>   
        }
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