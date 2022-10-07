import styled from "styled-components"
import { useState } from "react"
const LoginContainer=styled.div`
background:linear-gradient rgba(0,0,0, .5) rgba(0,0,0,.5) url("https://images.pexels.com/photos/2228578/pexels-photo-2228578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`
const Container=styled.div`
margin:0 auto; 
width:80%;`
const LoginHead=styled.h2``
const LoginPara=styled.p``
const LoginForm=styled.div`
display:flex;
flex-direction:column;
gap:.5em;
box-shadow:0 0 .5em grey;
`
const Input=styled.input`
width:50%;
outline:none;
border:1px solid #B4CDE6;
`
const Label=styled.label``
const Button=styled.button`
// border:none;
// border-radius:5px;
// background:aquamarine;
// color:red;
// font-size:1rem;
width:40%;
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
                <LoginHead>Enter Basic Information</LoginHead>
                <LoginPara>Please fill out this form</LoginPara>
                <LoginForm>
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
            </Container>
              
        </LoginContainer>
)
    }
    

export default Logins