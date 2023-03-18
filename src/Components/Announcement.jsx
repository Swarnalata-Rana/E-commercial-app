import styled from "styled-components"
const Container=styled.div`
height:60px;
background-color:teal;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:22px;
font-weight:500;`
const Announcement = () => {
  return (
    <Container>Super Deal! Free Shopping on Orders Over $50</Container>
  )
}
export default Announcement;