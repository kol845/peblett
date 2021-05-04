import * as React from "react"
import PropTypes from "prop-types"
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/core/styles';



const MyTextField = styled(TextField)({
    
});

const CustomTextField = ({id, label, type, rest}) => {
    
    return (

        <div
          style={{
            margin: `10px 0`,
          }}
        >
          <MyTextField id={id} label={label} type={type} {...rest}  />
        </div>
    )
}

CustomTextField.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    rest: PropTypes.any,
}

CustomTextField.defaultProps = {
  type: ""
}

export default CustomTextField
