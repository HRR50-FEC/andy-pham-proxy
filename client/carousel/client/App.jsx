import React from 'react';
import faker from 'faker';
import axios from 'axios';
import SideList from './SideList.jsx';
import Featuredbox from './Featuredbox.jsx';
import ExpandedView from './ExpandedView.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: [],
      selected: null,
      expanded: false,
    }
  }

  handleArrowClick() {
    let operator;
    if (event.target.name === 'previous') {
      if (this.state.selected.place === 0) {
        operator = this.state.test.length - 1
      } else {
        operator = -1
      }
    } else {
      if (this.state.selected.place === this.state.test.length - 1) {
        operator = (this.state.selected.place) * -1
      } else {
        operator = 1
      }
    }
    this.setState({
      selected: { place: this.state.selected.place + operator, image: this.state.test[this.state.selected.place + operator] }
    })

  }

  handleThumbClick(val) {
    this.setState({
      selected: { place: val, image: this.state.test[val] }
    })
  }

  handleFeatureClick() {
    this.setState({
      expanded: true,
    })
  }

  handleScreenClick(event) {
    let id = event.target.id;
    if (id === "screen") {
      this.setState({
        expanded: false
      })
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3333/listing')
      .then(result => {
        this.setState({
          test: result.data[0].imageURLs,
          selected: { place: 0, image: result.data[0].imageURLs[0] }
        })
      })
  }

  render() {
    return (
      <div>
        {(this.state.expanded === true)
          ? <ExpandedView
            test={this.state.test}
            image={this.state.selected}
            arrow={this.handleArrowClick}
            screen={this.handleScreenClick.bind(this)}
            thumbclick={this.handleThumbClick}
          />
          : null}
        <div className="carousel-main">
          <SideList
            list={this.state.test}
            click={this.handleThumbClick.bind(this)}
            selected={this.state.selected}
          />
          <Featuredbox
            image={this.state.selected}
            arrow={this.handleArrowClick.bind(this)}
            click={this.handleFeatureClick.bind(this)}
          />
        </div>
      </div>
    )
  }
}

export default App;