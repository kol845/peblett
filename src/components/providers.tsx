import * as React from "react"

import { createGlobalStyle } from 'styled-components' 
import { StylesProvider } from '@material-ui/core/styles';
import PropTypes from "prop-types"
import { MuiThemeProvider, createTheme, responsiveFontSizes } from '@material-ui/core/styles';

import '@fontsource/roboto';
import consts from "./../constants/constants"

let theme = createTheme({
  overrides: {
    // MuiFormControl:{
    //   root:{
    //     backgroundColor: "red"
    //   }
    // }
  //   // Style sheet name ⚛️
  //   MuiFormLabel: { // Changes the color of the TextFiled lable
  //     // Name of the rule
  //     root: {
  //       color:"rgb(255,255,255,0.5)",
  //     }
  //   },
  //   MuiInputBase: { // Changes the color of the TextFiled input
  //     // Name of the rule
  //     root: {
  //       color:"white",
  //     }
  //   },
  },
  typography: {
      fontFamily: [
          'Roboto',
          'Ariel',
      ].join(','),
  },
  palette: {
    type: 'dark',
    primary: { // ligt + dark + contrastText will be calculated based on 'main'
      main: consts.colors.PRIMARY,
    },
    secondary: {
      main: consts.colors.SECONDARY,
    },
    // error: will use the default color
  },
});
theme = responsiveFontSizes(theme); // Makes Font Size responsive automaticlly

// Contains all proviers and global settings
const Providers = ({ children }) => {
  return (
    <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
            <GlobalStyle/>
            { children }
        </MuiThemeProvider>
    </StylesProvider>

  )
}

const GlobalStyle = createGlobalStyle`
  body {
    overflow:hidden;
    background-color:black;
    font-family: Roboto;
    @media (max-width: ${consts.media.MOBILE}) {
      background-color:${consts.colors.BLACK};
    }
  }
`
Providers.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Providers
