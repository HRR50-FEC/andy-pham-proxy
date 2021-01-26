import React from 'react';
import styled from 'styled-components';

const Thumb = styled.div`
height: 60px;
width: 60px;
border-radius: 10px;
opacity: 0.65;
&:hover {
  opacity: 0.85;
};
justify-content: center;
align-items: center;
background: url(${props => props.image});
background-size: cover;
background-position: center;
cursor: pointer;
`
const Selected = styled.div`
height: 60px;
width: 60px;
border: solid;
border-weight: 1px;
border-radius: 10px;
justify-content: center;
align-items: center;
background: url(${props => props.image});
background-size: cover;
background-position: center;
cursor: pointer;
`

const SideListItem = (props) => {


  if (props.image === props.selected.image.thumb) {
    return (
      <div className="thumb-container" >
        <Selected
          image={props.image}
          onClick={() => { props.click(Number(props.place)) }}
        />
      </div>
    )
  } else {
    return (
      <div className="thumb-container">
        <Thumb
          image={props.image}
          onClick={() => { props.click(Number(props.place)) }}
        />
      </div>
    )

  }
}

export default SideListItem;