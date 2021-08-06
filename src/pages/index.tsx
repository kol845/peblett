import React, { useState } from 'react';

import Layout from '../components/layout'
import styled from 'styled-components' 
import consts from "./../constants/constants"
import Seo from "../components/seo"

import { Link } from "gatsby"
  
  const RootContainer = styled.div`
    display: flex;
    margin:auto;
    width: 40%;
    justify-content: center;
    height:100vh;
    @media (max-width: ${consts.media.TABLET}) {
      width: 70%;
    }
    @media (max-width: ${consts.media.MOBILE}) {
      width: 100%;
    }
  `


const Index = () => {
  return(
    <Layout>
      <Seo title="Welcome" />
      <RootContainer>
          THIS IS WELCOME
          <Link to="/home">Home</Link>
      </RootContainer>
    </Layout>
  )
}

export default Index
