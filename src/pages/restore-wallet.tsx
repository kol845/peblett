import React from 'react';
import styled from 'styled-components' 

import Typography from '@material-ui/core/Typography';

import Seo from "../components/seo"
import BackButton from '../components/backButton';

const RestoreWallet = () => {
  return(
    <RootContainer>
      <Seo title="Restore Wallet"/>
      <ContentContainer>
        <HeaderContainer>
        <BackButton />
          <Typography variant="h3" style={{textDecoration: "underline"}}>
              Restore Wallet
          </Typography>
        </HeaderContainer>
        <Typography variant="h5" style={{margin:"100px"}}>
              To be implemented...
        </Typography>
    </ContentContainer>
    </RootContainer>
  )
}

export default RestoreWallet

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
const HeaderContainer = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items:center;
  width:100%;
`