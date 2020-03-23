import React from 'react';
import './FighterDetails.css';

class FighterDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseChances: (this.props.fighter.favor / this.props.playMetricBaseTotal) * 100,
      actualChances: (this.props.fighter.rollingFavor / this.props.playMetricTotal) * 100
    }
  }

  componentWillMount() {
    let baseChances = (this.props.fighter.favor / this.props.playMetricBaseTotal) * 100;
    baseChances = Number.parseFloat(baseChances).toFixed(3);
    let cummulativeChances = (this.props.fighter.cummulativeFavor / this.props.playMetricBaseTotal) * 100;
    cummulativeChances = Number.parseFloat(cummulativeChances).toFixed(3);
    let actualChances = (this.props.fighter.rollingFavor / this.props.playMetricTotal) * 100;
    actualChances = Number.parseFloat(actualChances).toFixed(3);
    let baseShares = this.props.fighter.favor / (this.props.playMetricBaseTotal / 77);
    baseShares = Number.parseFloat(baseShares).toFixed(3);
    let currentShares = this.props.fighter.rollingFavor / (this.props.playMetricTotal / 77);
    currentShares = Number.parseFloat(currentShares).toFixed(3);
    let borderColor = "red";
    if (currentShares > baseShares) {
      borderColor = "green";
    }
    this.setState({
      baseChances: baseChances,
      cummulativeChances: cummulativeChances,
      actualChances: actualChances,
      baseShares: baseShares,
      currentShares: currentShares,
      borderColor: borderColor
    })
  }

  render() {
    return (
      <div className="fighter-details" >
        <div className="number-column">{this.props.fighter.id}</div>
        <div className="number-column" style={{borderStyle: "solid", borderWeight: 1, borderColor: this.state.borderColor}}>{this.props.fighter.name}</div>
        <div className="number-column">{this.props.fighter.favor}</div>
        <div className="number-column">{this.state.baseChances}%</div>
        <div className="number-column">{this.state.cummulativeChances}%</div>
        <div className="number-column">{this.props.fighter.rollingFavor}</div>
        <div className="number-column" style={{borderStyle: "solid", borderWeight: 1, borderColor: this.state.borderColor}}>{this.state.actualChances}%</div>
        <div className="number-column">{this.state.baseShares}</div>
        <div className="number-column" style={{borderStyle: "solid", borderWeight: 1, borderColor: this.state.borderColor}}>{this.state.currentShares}</div>
      </div>
    )
  }
}

export default FighterDetails;
