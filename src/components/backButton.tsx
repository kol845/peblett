import * as React from "react"
import { navigate } from "gatsby";

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import IconButton from './iconButton';

const BackButton = ({  }) => {

  return (
    <IconButton ariaLabel="Go back" style={{position:"absolute", left:"1%"}} Icon={ArrowBackIcon} onClick={()=>{navigate(-1)}}/>
  )
}

export default BackButton
