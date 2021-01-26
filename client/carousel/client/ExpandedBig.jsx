import React from 'react';
import styled from 'styled-components';

const Thumb = styled.div`
height: 224px;
width: 224px;
border-radius: 10px;
justify-content: center;
align-items: center;
background: url(${props => props.image});
background-size: cover;
background-position: center;
cursor: pointer;
`
const Selected = styled.div`
height: 224px;
width: 224px;
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
const BigContainer = styled.div`
margin: 5px;
display: flex;
justify-content: center;
align-items: center;
height: 230px;
width: 230px;
`

const ExpandedBig = (props) => {


  if (props.image === props.selected.image.small) {
    return (
      <BigContainer>
        <Selected
          image={props.image}
          onClick={() => { props.click(Number(props.place)) }}
        />
      </BigContainer>
    )
  } else {
    return (
      <BigContainer>
        <Thumb
          image={props.image}
          onClick={() => { props.click(Number(props.place)) }}
        />
      </BigContainer>
    )

  }
}

export default ExpandedBig;