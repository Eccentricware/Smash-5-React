import React from 'react';
import './Counters.css';
import Row from '../Row/Row';

class Counters extends React.Component {
  render() {
    return (
      <div className="counters">
        <Row fighters={this.props.roster.counters} opponent={this.props.opponent} opponentName={this.props.opponentName} counterRow={true} maxMetric="1"/>
      </div>
    );
  }
}

export default Counters;
