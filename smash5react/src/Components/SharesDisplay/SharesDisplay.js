import React from 'react';
import './SharesDisplay.css';

class SharesDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 1916,
      height: 1078
    }
  }

  render() {
    return (
      <div>
        <svg className="display-frame" width={this.state.width} height={this.state.height} viewBox={`0 0 ${this.state.width} ${this.state.height}`}>
          {
            this.props.roster.all.map(fighter => {
              return (
                <g key={fighter.id}>
                  <polygon className="shares-display"
                    points={`${fighter.preferencePosition*(this.state.width/this.props.roster.all.length)}
                             ${this.state.height/2}

                             ${(fighter.preferencePosition+1)*(this.state.width/this.props.roster.all.length)}
                             ${this.state.height/2}

                             ${(fighter.preferencePosition+1)*(this.state.width/this.props.roster.all.length)}
                             ${this.state.height/2-(this.state.height/2*((fighter.selectionChances - fighter.intendedChances) / this.props.roster.maxChancesDifference))}

                             ${fighter.preferencePosition*(this.state.width/this.props.roster.all.length)}
                             ${this.state.height/2-(this.state.height/2*((fighter.selectionChances - fighter.intendedChances) / this.props.roster.maxChancesDifference))}
                           `}
                    fill={fighter.selectionChances > fighter.intendedChances ? "green" : "red"} stroke="white"/>
                  <text className="shares-display">{fighter.name}</text>
                </g>
              )
            })
          }
        </svg>
      </div>
    )
  }
}

export default SharesDisplay;
