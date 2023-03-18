import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import { Badge } from '@mui/material';
import { mobile } from '../responsive';
const Container=styled.div`
height:100px;  
${mobile({height:"50px"})}`;
const Wrapper=styled.div`
padding:10px 20px; 
display:flex;
align-items:center;
justify-content:space-between;
${mobile({padding:"10px"})}`
const Left=styled.div`
flex:1;
display:flex;
align-items:center;`
const Language=styled.span`
font-size:14px;
cursor:pointer;
${mobile({display:"none"})}`
const SearchContainer=styled.div`
border:0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;`
const Input=styled.input`
border:none;`
const Center=styled.div`
flex:1;
text-align:center;`;
const Logo=styled.h1`
font-weight:bold;`
const Right=styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;`;
const MenuItem=styled.div`
font-size:15px;
cursor:pointer;
margin-left:25px;`
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language></Language>
                <SearchContainer>
                    <Input placeholder="Search"/>
                   <Search style={{color:"gray",fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>ANITA WEBSITE</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SING IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>    
  )
}
export default Navbar;