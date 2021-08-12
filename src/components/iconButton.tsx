import * as React from "react"

import PropTypes from "prop-types"

import IconButton from '@material-ui/core/IconButton';

const PebIconButton = ({ style, Icon, onClick, ariaLabel}) => {

  return (
    <IconButton aria-label={ariaLabel} style={style? {...style} :{}} onClick={onClick}>
      <Icon fontSize="large"/>
    </IconButton>
  )
}

PebIconButton.propTypes = {
  style:PropTypes.object  
}

export default PebIconButton
