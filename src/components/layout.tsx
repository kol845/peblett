import * as React from "react"
import PropTypes from "prop-types"

import styled, { createGlobalStyle } from 'styled-components' 



import consts from "./../constants/constants"



const Layout = ({ children }) => {
''

  return (
    <React.Fragment>
      <GlobalStyle/>
      <RootContainer>
        <ContentContainer>
          <main>{children}</main>
        </ContentContainer>
      </RootContainer>
    </React.Fragment>

  )
}
const GlobalStyle = createGlobalStyle`
  body {
    overflow:hidden;
    background-color:${consts.colors.DARK_SIENNA};
    @media (max-width: ${consts.media.MOBILE}) {
      background-color:${consts.colors.DARK_SIENNA};
    }
  }

`
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
const ContentContainer = styled.div`
  display: flex;
  margin:auto;
  justify-content: center;
  background-color:${consts.colors.RED};
  width: 100%;
  padding:10px;
  border-radius:20px;
`


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
