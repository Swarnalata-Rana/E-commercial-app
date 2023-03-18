import { Add, Remove } from "@mui/icons-material"
import styled from "styled-components"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"
const Container=styled.div``
const Wrapper=styled.div`
padding:50px;
display:flex;`
const ImageContainer=styled.div`
flex:1;
// margin-left:8rem;`
const Image=styled.img`
// width:100%;
height:80vh;
// object-fit:cover`
const InfoContainer=styled.div`
margin-left:5rem;`
const Title=styled.h1`
font-weight:200`
const Desc=styled.p`
margin:20px 0px;`
const Price=styled.span`
font-weight:100;
font-size:40px;`
const FilterContainer=styled.div`
width:50%;
margin:30px 0px;
display:flex;
justify-content:space-between;`
const Filter=styled.div`
display:flex;
align-items:center;`
const FilterTitle=styled.span`
font-size:20px;
font-weight:200;`
const FilterColor=styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color: ${props=>props.color};
margin:0px 5px;
display:flex;
cursor:pointer;`
const FilterSize=styled.select`
margin-left:10px;
padding:5px;`
const FilterSizeOption=styled.option``
const AddContainer=styled.div`
width:50%;
display:flex;
align-items;
justify-content:center;`
const AmountContainer=styled.option`
display:flex;
align-items;
font-weight:700;`
const Amount=styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solit teal;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;
margin-left:10rem;`
const Button=styled.button`
padding:10px;
border:2px solid teal;
background-color:white;
cursor:pointer;
margin-left:16rem;
&:hover{
    background-color:lightgray;
}`
const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
                <Image src="./Image/summ.webp"/>
            </ImageContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quod eum itaque ipsa corporis, quis, ullam repellat tenetur obcaecati sequi nisi laborum ad illum error ea. Iure aspernatur reiciendis voluptates.</Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="blue"/>
                        <FilterColor color="red"/>
                        <FilterColor color="green"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART </Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}
export default Product;