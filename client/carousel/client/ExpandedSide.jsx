import React from 'react';
import styled from 'styled-components';
import ExpandedLittle from './ExpandedLittle.jsx'
import ExpandedBig from './ExpandedBig.jsx'

//incoming list of images

const SideBlock = styled.div`
display: flex;
flex-direction: column;
overflow: scroll;
width: 250px;
margin-left: 30px;
margin-top: 50px;
`

const Little = styled.div`
display: flex;
flex-direction: row;
`

const ExpandedSide = (props) => {
  let subLists = [];
  for (let i = 0; i < (props.list.length / 3); i++) {
    let index = i * 3;
    subLists.push(props.list.slice(index, index + 3))
  }


  return (
    <SideBlock>
      {subLists.map((group, i) => {
        return (
          <div>
            <Little>
              <ExpandedLittle image={group[0].thumb} selected={props.selected} click={props.click} place={i * 3} />
              <ExpandedLittle image={group[1].thumb} selected={props.selected} click={props.click} place={(i * 3) + 1} />
            </Little>
            <ExpandedBig image={group[2].small} selected={props.selected} click={props.click} place={(i * 3) + 2} />
          </div>

        )
      })}
    </SideBlock>
  )
}

export default ExpandedSide



