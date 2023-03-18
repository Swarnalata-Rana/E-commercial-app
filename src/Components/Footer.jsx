import { Email, Facebook, Instagram, LinkedIn, Phone, Place, Twitter } from "@mui/icons-material"
import styled from "styled-components"
const Container=styled.div`
flex:1;
background-color:pink;`
const Left=styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;`
const Logo=styled.h1``
const Desc=styled.p`
margin:20px 0px`
const SocialContainer=styled.div`
display:flex;`
const SocialIcon=styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:#${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin:20px;`
const Center=styled.div`
flex:1;
padding:10px;
margin-left:30rem;
margin-top:-20rem;`
const Titel=styled.h3`
margin-bottom:20px;`
const List=styled.ul`
margin:0;
padding:0px;
list-style:none;
display:flex;
flex-wrap:wrap;`
const ListItem=styled.li`
width:35%;
margin-bottom:10px;`
const Right=styled.div`
flex:1;
padding:20px;
margin-left:75rem;
margin-top:-15rem;`
const Contact=styled.h3`
margin-top:2rem;`
const ContactItem=styled.div`
margin-bottom:20px;
display:flex;
align-items:center;`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Lama</Logo>
            <Desc>
                There are many variations of passages of Lorem <br/>Ipsumavailable, but the
                majority have suffered <br/>alteraction insome form,by injected 
                humour,or <br/>randomised wordswhich don't look even slightly<br/> believable.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <LinkedIn/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Titel>Useful Links</Titel>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Contact>Contact</Contact>
            <ContactItem><Place style={{marginRight:"10px"}}/>India,Banglore</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>0123456789</ContactItem>
            <ContactItem><Email style={{marginRight:"10px"}}/>anita@143gmail.com</ContactItem>
        </Right>
    </Container>
  )
}
export default Footer;