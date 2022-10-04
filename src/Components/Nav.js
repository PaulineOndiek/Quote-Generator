import {React} from 'react';
import styled from "styled-components"
import NotificationsIcon from '@mui/icons-material/Notifications';
const NavContainer=styled.div``
const Container=styled.div`
margin:0 auto;
width:80%;
`
const InnerNav=styled.div`
display:flex;
justify-content:space-between;

`
const NavLeft=styled.div`
display:flex;
align-items:center;
gap:2em;`
const NavPara=styled.p``
const NavList=styled.li`
list-style-type:none;
`
const NavUl=styled.ul`
display:flex;
gap:2em;
`
const NavRight=styled.div`
`





const Nav=()=>{
    return(
        <NavContainer>
            <Container>
                <InnerNav>
            <NavLeft>
            <NavPara>Name</NavPara>
            <NavList>Add Quote</NavList>
            </NavLeft>
            <NavRight>
                <NavUl>
            <NavList>
            <NotificationsIcon/>
            </NavList>
            <NavList>Login/Register</NavList>
            </NavUl>
            </NavRight>
            </InnerNav>
            </Container>
        </NavContainer>
    )
}
export default Nav