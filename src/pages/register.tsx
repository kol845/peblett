import React, { useState } from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import TextField from '../components/atoms/text_field';
import Button from '../components/atoms/button';

import { useForm, Controller } from "react-hook-form";

import apiHandler from "../utils/api"

const Register = () => {
  
    const { control, register, handleSubmit, watch, formState: { errors } } = useForm();
    let [response, setResponse] = useState("")
    let [loginSucess, setLoginSucess] = useState(false)
    const doRegister = async (data) =>{
      await apiHandler.reqRegister(data.uname, data.passwd, data.email, postData)
    }
    
    const postData = (data)=>{
      if(data.status<=299){
        setLoginSucess(true)
      }else{
        setLoginSucess(false)
      }
      setResponse(JSON.stringify(data))
    }
    return(
      <Layout>
      <Seo title="Register" />
      <h1>Register</h1>
      <form onSubmit={handleSubmit(doRegister)}>
        <Controller
          rules={{ required: true }}
          name="uname"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField id="uname" label="Username" rest={field}/>}
        />
        <Controller
          rules={{ required: true }}
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField id="email" label="Email" rest={field}/>}
        />
        <Controller
          rules={{ required: true }}
          name="passwd"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField id="passwd" label="Password" type="password" rest={field}/>}
        />
        <Button id="register-btn" label="Register" type="submit"/>
      </form>
      <p style={{ fontWeight:"bold", color:(loginSucess ? "green":"red")}}>
        {response}
      </p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
      <Link to="/">Go back to Login</Link> <br />
      </p>
    </Layout>
    )
  }


export default Register
