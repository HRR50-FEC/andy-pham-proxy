import React from 'react';
import styled from 'styled-components';

const Thumb = styled.div`
height: 108px;
width: 108px;
border-radius: 10px;
justify-content: center;
align-items: center;
background: url(${props => props.image});
background-size: cover;
background-position: center;
cursor: pointer;
`
const Selected = styled.div`
height: 108px;
width: 108px;
border: solid;
border-weight: 1px;
border-radius: 10px;
border-color: #FFFFFF;
justify-content: center;
align-items: center;
background: url(${props => props.image});
background-size: cover;
background-position: center;
cursor: pointer;
`

const LittleContainer = styled.div`
margin: 2.5px;
display: flex;
justify-content: center;
align-items: center;
height: 115px;
width: 115px;
`

const ExpandedLittle = (props) => {


  if (props.image === props.selected.image.thumb) {
    return (
      <LittleContainer>
        <Selected
          image={props.image}
          onClick={() => { props.click(Number(props.place)) }}
        />
      </LittleContainer>
    )
  } else {
    return (
      <LittleContainer>
        <Thumb
          image={props.image}
          onClick={() => { props.click(Number(props.place)) }}
        />
      </LittleContainer>
    )

  }
}

export default ExpandedLittle;