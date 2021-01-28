import React from 'react'
import styled from 'styled-components'

const Featured = styled.div`
display: flex;
padding-left: 20px;
width: 650px;
text-align: center;
align-items: center;
justify-content: center;
`
const ButtonBox = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
width: 650px;
position: absolute;
z-index: 2;
`

const NavButton = styled.button`
background: #FFFFFF;
cursor: pointer;
border: none;
justify-content: space-between;
height: 48px;
width: 48px;
border-radius: 24px;
box-shadow: 0px 8px 15px rgba(34, 34, 34, 0.15);
`

const FeaturedImage = styled.img`
position: relative;
z-index: 1;
height: 100%;
max-height: 450px;
max-width: 650px;
border-radius: 10px;
justify-content: center;
text-align: center;
`
const Featuredbox = (props) => {

  let image;
  if (props.image === null) {
    image = "https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif";
  } else {
    image = props.image.image.regular
  }




  return (
    <Featured>
      <FeaturedImage src={image} onClick={props.click} expanded={props.expanded} name="image" />
      <ButtonBox>
        <div>
          <NavButton className="left" name="previous" onClick={props.arrow} expanded={props.expanded}>{"<"}</NavButton>
        </div>
        <div>
          <NavButton className="right" name="next" onClick={props.arrow}>{">"}</NavButton>
        </div>
      </ButtonBox>
    </Featured >
  )
}

export default Featuredbox;