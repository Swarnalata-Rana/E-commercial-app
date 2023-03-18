import { Add, Remove } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
const Container=styled.div``
const Wrapper=styled.div`
padding:20px;`
const Title=styled.h1`
font-weight:300;
 text-align:center;`
const Top=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;`
const TopButton=styled.button`
padding:10px;
font-weight:600
corsor:pointer;
border:${(props) => props.type ==="filled" && "none"};
background-color:${props =>
    props.type ==="filled" ? "black" : "transparent"};
color:${(props) => props.type ==="filled" && "white"};`
const TopTexts=styled.div``
const TopText=styled.span`
text-decoration:underline;
cursor:pointer;
margin:0px 10px`
const Bottom=styled.div`
display:flex;
justify-content:space-between;`
const Info=styled.div`
flex:3;`
const Product=styled.div`
display:flex;`
const ProductDetail=styled.div``
const Image=styled.img`
flex:2;`
const Details=styled.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;
margin-top:px;`
const ProductName=styled.span``
const ProductId=styled.span``
const ProductColor=styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color}`
const ProductSize=styled.span``
const PricetDetail=styled.div`
margin-left:30rem;
flex:1;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;`
const ProductAmountContainer=styled.div`
display:flex;
align-items:center;
margin-bottom:20px;`
const ProductAmount=styled.div`
font-size:24px;
margin:5px;`
const ProductPrice=styled.div`
font-size:30px;
font-weight:200;
margin-top:-3rem;`
const Hr=styled.hr`
background-color:#eee;
border:none;
height:1px;`
const Summary=styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;`
const SummaryTitle=styled.h1`
font-weight:200`
const SummaryItem=styled.div`
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight:${props=>props.type === "total" && "500"}
font-size:${props=>props.type === "total" && "24px"}`
const SummaryText=styled.span``
const SummaryTextPrice=styled.span``
const Button=styled.button`
width:100%;
background-color:black;
padding:10px;
color:white;
font-weight:600;`
const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src=""/>
                            <Details>   
                                <ProductName>Product : JESSIE THUNDER SHOES</ProductName>
                                <ProductId>ID : 234567890</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize>Size : 37.5</ProductSize> 
                            </Details>
                        </ProductDetail>
                        <PricetDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PricetDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src=""/>
                            <Details>   
                                <ProductName>Product : JESSIE THUNDER SHOES</ProductName>
                                <ProductId>ID : 234567890</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize>Size : 37.5</ProductSize> 
                            </Details>
                        </ProductDetail>
                        <PricetDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PricetDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryText>Subtotal</SummaryText>
                        <SummaryTextPrice> $ 80</SummaryTextPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryText>Estimated Shipping</SummaryText>
                        <SummaryTextPrice> $ 5.90</SummaryTextPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryText>Shipping Discount</SummaryText>
                        <SummaryTextPrice> $ -5.90</SummaryTextPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryText >Total</SummaryText>
                        <SummaryTextPrice> $ 80</SummaryTextPrice>
                    </SummaryItem>
                    <Button>CHECKOUOT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}
export default Cart;