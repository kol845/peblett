import React, { useState, useEffect }  from 'react';
import styled from 'styled-components' 

import TextField from '../textField';
import Button from '../button'

const PasswordConfirmation = ({ onSubmit, buttonText="Confirm" }) => {
  let [password, setPassword] = useState("")
  
  return(
        <Form noValidate autoComplete="off">
          <TextFiledContainer>
            <TextField size="full" id="password" label="Confirm Password" value={password} type="password" onChange={(e)=>setPassword(e.target.value)}/>
          </TextFiledContainer>
          <Button text={buttonText} onClick={()=>onSubmit(password)} />
        </Form>

  )
}

export default PasswordConfirmation

const Form = styled.form`
  display: flex;
  flex-direction:column;
  justify-content:space-between;
`

const TextFiledContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
`