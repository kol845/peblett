// For Form info, check: 
// https://github.com/kol845/peblett/blob/main/src/pages/index.tsx

import * as React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components' 
import consts from "./../constants/constants"
import Seo from "../components/seo"
import { Link } from "gatsby"
import Layout from '../components/layout'



const Home = () => {
''

  return (
    <Layout>
        <Seo title="Home" />
        <RootContainer>
            THIS IS HOME
            <Link to="/">Welcome</Link>
        </RootContainer>
    </Layout>


  )
}

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


export default Home
