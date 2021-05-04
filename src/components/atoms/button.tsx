import * as React from "react"
import PropTypes from "prop-types"
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';



const MyButton = styled(Button)({
    
});

const CustomButton = ({ id, label, type }) => (

    <div
      style={{
        margin: `10px 0`,
      }}
    >
      <MyButton id={id} type={type} variant="contained" color="primary">
        {label}
      </MyButton>
    </div>
)

CustomButton.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
}

CustomButton.defaultProps = {
  type:"button",
}

export default CustomButton
