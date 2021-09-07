import React, { useState, useEffect }  from 'react';
import styled from 'styled-components' 

import TextField from '../textField';
import Button from '../button'

const PasswordInputScreen = ({ onSubmit }) => {
  let [password, setPassword] = useState("")
  let [confirmPassword, setConfirmPassword] = useState("")
  
  return(
        <Form noValidate autoComplete="off">
          <TextFiledContainer>
            <TextField id="password" label="Password" value={password} type="password" onChange={(e)=>setPassword(e.target.value)}/>
            <TextField id="confirmPassword" label="Confirm Password" type="password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
          </TextFiledContainer>
          <Button text="Create" onClick={()=>onSubmit(password)} size="small"/>
        </Form>

  )
}

export default PasswordInputScreen

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