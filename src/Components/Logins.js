import styled from "styled-components"
const LoginContainer=styled.div``
const Container=styled.div`
margin:0 auto; 
width:80%;`
const LoginForm=styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
padding:1em;
box-shadow:0 0 2em grey;
`
const Input=styled.input``
const Button=styled.button`
border:none;
border-radius:5px;
background:aquamarine;
color:red;
font-size:1rem;
width:40%;
`

const Logins=()=>{
    return(
        <LoginContainer>
            <Container>
                <LoginForm>
            <div style={{display:"flex" , gap:"2em"}}>
            <Input type="text" placeholder="First Name"/>
            <Input type="text" placeholder="Last Name"/>
            </div>
            <div style={{display:"flex", gap:"2em"}}>
            <Input type="text" placeholder="Email"/>
            <Input type="text" placeholder="Password"/>
            </div>
            <Button>Login</Button>
            </LoginForm>
            </Container>
              
        </LoginContainer>
    )
}
export default Logins