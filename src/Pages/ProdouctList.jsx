import styled from "styled-components"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"
import Products from "../Components/Product"
const Container=styled.div``
const Title=styled.h1`
margin:20px;`
const FilterContainer=styled.div`
display:flex;
justify-content:space-between;`
const Filter=styled.div`
margin:20px;`
const FilterText=styled.div`
font-size:20px;
font-weight:600;`
const Select=styled.select``
const Option=styled.option``
const ProdouctList = () => {
  return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>Dreass</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Product</FilterText>
                    <Select>
                        <Option disable selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Blue</Option>
                        <Option>Red</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                        <Option>Pink</Option>
                        <Option>Orange</Option>
                    </Select>
                    <Select>
                        <Option disable selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText> Sort Products</FilterText>
                    <Select>
                        <Option selected>Netwest</Option>
                        <Option>Price(asc)</Option>
                        <Option>Price(desc)</Option>
                    </Select>
                </Filter>        
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}
export default ProdouctList;