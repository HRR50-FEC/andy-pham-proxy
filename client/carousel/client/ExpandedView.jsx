import React from 'react';
import styled from 'styled-components';
import Featuredbox from './Featuredbox.jsx';
import ExpandedSide from './ExpandedSide.jsx';

const Screen = styled.div`
display: flex;
flex-direction: row;
position: fixed;
background: rgba(63, 63, 63, 0.9);
width: 100%;
height: 100%;
z-index: 3;
justify-content: center;

`


class ExpandedView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: props.image,
      test: props.test,
      arrow: props.arrow,
      clickScreen: props.screen,
      thumbclick: props.thumbclick,
      zoom: false
    }
  }

  render() {
    return (
      <div>
        <Screen onClick={this.state.clickScreen} name="screen" id="screen">
          <Featuredbox
            image={this.state.selected}
            arrow={this.state.arrow.bind(this)}
            expanded={true}
          />
          <ExpandedSide
            list={this.state.test}
            selected={this.state.selected}
            click={this.state.thumbclick.bind(this)}
          />
        </Screen>
      </div>
    )
  }
}

// const ExpandedView = (props) => {
//   return (
//     <Screen>
//       <Featuredbox
//         image={props.image}
//         arrow={props.arrow}
//       />
//     </Screen>
//   )
// }

export default ExpandedView;