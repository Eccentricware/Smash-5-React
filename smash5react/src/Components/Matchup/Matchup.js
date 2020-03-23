import React from 'react'
import './Matchup.css';
import ModeSelector from '../ModeSelector/ModeSelector';
import OpponentSelector from '../OpponentSelector/OpponentSelector';
import OpponentResponse from '../OpponentResponse/OpponentResponse';
import Fighter from '../Fighter/Fighter';

class Matchup extends React.Component {
  constructor(props) {
    super(props);
    this.handleVsDisplayClick = this.handleVsDisplayClick.bind(this);
    this.state = {
      displayMode: "characterSelect"
    }
  }

  handleVsDisplayClick() {
    console.log("Click");
    this.props.nextDisplayMode();
  }

  render() {
    return (
      <div className="matchup">
        <Fighter image={this.props.selected.image} name={this.props.selected.name} championRating="255" playMetric={this.props.selected.playMetric} maxMetric="1"/>
        <div className="vsFlairContainer" onClick={this.handleVsDisplayClick}>
          <div className="vsFlair"></div>
        </div>
        <Fighter image={this.props.opponent.defaultImg} championRating="0"  playMetric={this.props.selected.playMetric} maxMetric="1"/>
        <ModeSelector selectMode={this.props.selectMode} />
        {this.props.resultWaiting ?
          <div>
            <button className="victory-btn" onClick={this.props.declareVictory}>Victory</button>
            <button className="defeat-btn" onClick={this.props.declareDefeat}>Defeat</button>
          </div>
        :
            <button className="random-btn" onClick={this.props.randomizer}>Randomize!</button>
        }
        {this.props.resultWaiting ?
          <OpponentResponse roster={this.props.roster} setChallengedState={this.props.setChallengedState} mysteryOpponent={this.props.mysteryOpponent}/>
          :
          <OpponentSelector roster={this.props.roster} selectOpponent={this.props.selectOpponent}/>
        }
      </div>
    );
  }
}

export default Matchup;
