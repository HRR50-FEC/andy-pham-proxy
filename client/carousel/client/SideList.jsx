import React from 'react';
import SideListItem from './SideListItem.jsx';
import styled from 'styled-components';


const List = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const SideList = (props) => {
  return (
    <List>
      {props.list.map((image, i) =>
        <SideListItem image={image.thumb} place={i} key={i} click={props.click} selected={props.selected} />
      )}
    </List>
  )
}

export default SideList;
