import * as React from "react"

import PropTypes from "prop-types"

import IconButton from '@material-ui/core/IconButton';

/*
The classname parameter allows this component to be externaly styled with styled-components
*/

const PebIconButton = ({ style={}, Icon, onClick, ariaLabel, className=""}) => {

  return (
    <IconButton className={className} aria-label={ariaLabel} style={style} onClick={onClick}>
      <Icon fontSize="large"/>
    </IconButton>
  )
}

PebIconButton.propTypes = {
  style:PropTypes.object  
}

export default PebIconButton
