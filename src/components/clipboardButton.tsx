import * as React from "react"

import PropTypes from "prop-types"

import IconButton from '@material-ui/core/IconButton';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const ClipboardButton = ({ onClick, style }) => {

  return (
    <IconButton aria-label="Copy to clipboard" style={style? {...style} :{}} onClick={()=>{onClick()}}>
      <FileCopyIcon fontSize="large"/>
    </IconButton>
  )
}

ClipboardButton.propTypes = {
  onClick:PropTypes.func,
  style:PropTypes.object  
}
  

export default ClipboardButton
