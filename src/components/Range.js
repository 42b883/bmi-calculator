import React, { Component } from 'react';

class Range extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }
    static defaultProps = {
        min: 0,
        max: 245,
        step: 1
    }

    onChange = (event) => { 
        const {value} = event.target;
        console.log(value);
        this.props.onChange(this.state.value);
        this.setState({
            value
        })
    }
  render() {
    return (
      <div className="range">
        <input type="range"
        value={this.state.value}
        min={this.props.min}
        max={this.props.max}
        step={this.props.step} 
        onChange={this.onChange}/>
      </div>
    );
  }
}

export default Range;
