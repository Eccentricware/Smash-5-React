import React from 'react';
import './CharacterSelect.css';
import Row from '../Row/Row';

class CharacterSelect extends React.Component {
  render() {
    return (
      <div className="characterSelectContainer">
        <Row fighters={this.props.roster.row1} opponent={this.props.opponent} opponentName={this.props.opponentName} counterRow={false} maxMetric={this.props.maxMetric}/>
        <Row fighters={this.props.roster.row2} opponent={this.props.opponent} opponentName={this.props.opponentName} counterRow={false} maxMetric={this.props.maxMetric}/>
        <Row fighters={this.props.roster.row3} opponent={this.props.opponent} opponentName={this.props.opponentName} counterRow={false} maxMetric={this.props.maxMetric}/>
        <Row fighters={this.props.roster.row4} opponent={this.props.opponent} opponentName={this.props.opponentName} counterRow={false} maxMetric={this.props.maxMetric}/>
        <Row fighters={this.props.roster.row5} opponent={this.props.opponent} opponentName={this.props.opponentName} counterRow={false} maxMetric={this.props.maxMetric}/>
        <Row fighters={this.props.roster.row6} opponent={this.props.opponent} opponentName={this.props.opponentName} counterRow={false} maxMetric={this.props.maxMetric}/>
        <Row fighters={this.props.roster.row7} opponent={this.props.opponent} opponentName={this.props.opponentName} counterRow={false} maxMetric={this.props.maxMetric}/>
      </div>
    )
  }
}

export default CharacterSelect;
