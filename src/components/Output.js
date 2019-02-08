import React, { Component } from 'react';

class Output extends Component {
  render() {
      let height = this.props.data.height;
      let weight = this.props.data.weight;
      let bmi = this.props.data.bmi;
      let bmiClass = this.props.data.bmiClass;
    return (
      <div className="output">
        <h3>Height: {height} cm.</h3>
        <h3>Weight: {weight} kg.</h3>
        <h3>BMI: {bmi}</h3>
        <h3 className={(this.props.data.bmiClass === "Obese") ? "danger" : ""}>Result: {bmiClass} {(this.props.data.bmiClass === "Obese") ? <a href='http://someproductsite.com'>What Can i Do?</a> : ""}</h3>
      </div>
    );
  }
}

export default Output;
