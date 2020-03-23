import React from 'react';
import './Row.css';
import Fighter from '../Fighter/Fighter';

class Row extends React.Component {
  componentWillMount() {
    this.props.fighters.forEach(fighter => {
      console.log(`Processing ${fighter.name}`);
      console.log(fighter);
    });
  }

  render() {
    return (
      <div className="row" style={this.props.style}>
        {
          this.props.fighters.map(fighter => {
            return <Fighter key={fighter.id} name={fighter.name} image={fighter.image} counterRow={this.props.counterRow} counterRating={fighter.matchups[this.props.opponent.keyName]} playMetric={fighter.playMetric} maxMetric={this.props.maxMetric} championRating={fighter.championRating}/>
          })
        }
      </div>
    )
  }
}

export default Row;
