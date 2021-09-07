import React, { useState } from 'react';
import styled from 'styled-components' 
import { navigate } from 'gatsby'

import Typography from '@material-ui/core/Typography';

import Seo from "../components/seo"
import Header from '../components/header';
import Button from '../components/button'


import TextField from '@material-ui/core/TextField';

const RecoverWallet = () => {
  let [recPhrase, setRecPhrase] = useState<string>("")

  const recover = async() =>{
    navigate(
      "/new-password/",
      {
        state:{
          mnemonic:recPhrase,
        },
      }
    )
  }

  return(
    <RootContainer>
      <Seo title="Recover Wallet"/>
      <ContentContainer>

        <Header text="Recover Wallet"/>

        <StyledTextField style={{margin:"100px"}}
          id="recovery-phrase"
          label="Recovery Seed Phrase"
          multiline
          rows={5}
          variant="filled"
          value={recPhrase}
          onChange={(e)=>setRecPhrase(e.target.value)}
        />
        <Button text="Restore" onClick={recover} />  

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
  justify-content: center;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction:column;
  margin:auto;
  height:70vh;
  justify-content: center;
  align-items:center;
`
