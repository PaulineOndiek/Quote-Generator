import styled from "styled-components"
import { useState } from "react"
const LoginContainer=styled.div`

display:flex;
align-items:center;
justify-content:center;
// background:yellow;
height:100%;
vertical-align:center;
`
const Container=styled.div`
margin:0 auto; 
width:80%;
`
const LoginInfo=styled.div`
display:flex;
justify-content:center;
align-items:center;
// background:red;
`
const LoginHead=styled.h2``
const LoginPara=styled.p``
const LoginForm=styled.div`
display:flex;
flex-direction:column;
gap:.5em;
padding-left:1em;
box-shadow:0 0 .5em grey;
// align-items:center;
width:fit-content;
padding:3em;

`
const Input=styled.input`
width:100%;
outline:none;
padding:1em;
border:1px solid #B4CDE6;
border-radius:5px;
`
const Label=styled.label``
const Button=styled.button`
border:none;
border-radius:5px;
background:#B4CDE6;
color:white;
font-size:1rem;
padding:.5em 1em;
width:40%;
text-align:center;
margin-left:5em;
`

const Logins=()=>{
    const [name, setName]=useState({
        firstName:"",
        lastName:"",
        passwordName:"",
        reenterName:"",
        emailName:""
    })

    const [error, setError]=useState({
        firstError:"",
        lastError:"",
        passwordError:"",
        reenterError:"",
        emailError:""
    })
    const[message,setMessage]=useState("")
 const handleLogin=()=>{
    try{
 
    if(name.firstName===""){
        return setError({...error, firstError:"Please enter your first name"})
    }
    if(name.lastName===""){
        return setError({...error,lastError:"Please enter your last name"})
    }
    if(name.passwordName===""){
        return setError({...error,passwordError:"Please enter your password"})
    }
    if (name.reenterName===""){
        return setError({...error, reenterError:"Please re-enter your password"})
    }
    if(name.emailName===""){
        setError({...error, emailError:"Please enter your Email Address"})
    }

  else{setMessage("Your Account has been Successfully Created")
}
    }
        catch
            (error){
                console.log(error)
            }
        }
    
    return(
    <LoginContainer>
            <Container>
                <LoginInfo>
                <LoginForm>
                <LoginHead>Enter Basic Information</LoginHead>
                <LoginPara>Please fill out this form</LoginPara>
            <Label>Name:</Label>
            <Input type="text"/>
            <Label>Email:</Label>
            <Input type="text"/>
            <Label>Password:</Label>
            <Input type="text" />
            <Label>Re-Enter Password:</Label>
            <Input type="text"/>
    
            <Button>Login</Button>
            </LoginForm>
            </LoginInfo>
            </Container>
              
        </LoginContainer>
)
    }
    

export default Logins