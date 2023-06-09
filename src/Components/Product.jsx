import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import styled from 'styled-components';
const Info=styled.div`
opacity:1;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
z-index:3;
display:flex;
align-items:center;
justify-content:center;`
const Container=styled.div`
flex:1;
margin:5px;
min-width:280px;
height:350px;
display:flex;
align-item:center;
justify-content:center; 
background-color:teal;
position:relative;`
const Circle=styled.div`
width:200px;
height:200px;
border-redius:50%;
background-color:white;
position:absolute;`
const Image=styled.img`
height:75%;
z-index:2;`
const Icon=styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
margin:10px;
margin-top:17rem;
transition:all 0.5s ease;
&:hover{
    background-color:#e9f5f5;
    transform:scale(1.1)
}`
const Product = ({item}) => {
  return (
<Container>
    <Circle/>
    <Image src={item.img}/>
    <Info>
        <Icon>
            <ShoppingCartOutlined/>
        </Icon>
        <Icon>
            <SearchOutlined/>
        </Icon>
        <Icon>
            <FavoriteBorderOutlined/>
        </Icon>
    </Info>
</Container> 
 )
}
export default Product;