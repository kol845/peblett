import * as React from "react"
import PropTypes from "prop-types"

import styled from 'styled-components' 

import consts from "./../constants/constants"
import Transition from "./transition"

const Layout = ({ children, location }) => {

  return (
    <React.Fragment>
      <RootContainer>
        <ContentContainer>
          <DotContainer style={{marginTop:"18px"}}>
            <Dot/>
            <Dot/>
          </DotContainer>
          <Transition location={location}>
            {children}
          </Transition>
          <DotContainer style={{marginBottom:"18px"}}>
            <Dot/>
            <Dot/>
          </DotContainer>
        </ContentContainer>
      </RootContainer>
    </React.Fragment>

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
const ContentContainer = styled.div`
  display: flex;
  flex-direction:column;
  margin:auto;
  justify-content: center;
  background-color:${consts.colors.BLACK};
  width: 100%;
  padding:18px;
  border-radius:20px;
  color:white;
  font-size:26px;
`
const Dot = styled.div`
  height: 12px;
  width: 12px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
`
const DotContainer = styled.div`
display:flex;
justify-content:space-between;
@media (max-width: ${consts.media.MOBILE}) {
  display: none;
}
`
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
