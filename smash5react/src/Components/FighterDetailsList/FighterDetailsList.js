import React from 'react';
import FighterDetails from '../FighterDetails/FighterDetails';
import './FighterDetailsList.css';

class FighterDetailsList extends React.Component {
  render() {
    return (
      <div className="fighter-details-sheet">
        <div className="fighter-details-header">
          <div>ID</div>
          <div>Fighter Name</div>
          <div>Base Favor</div>
          <div>Base %</div>
          <div>Cummulative</div>
          <div>Current Favor</div>
          <div>Current %</div>
          <div>Base Shares</div>
          <div>Current Shares</div>
        </div>
        {
          this.props.detailList.map(fighter => {
            return <FighterDetails
                    key={fighter.id}
                    fighter={fighter}
                    playMetricTotal={this.props.playMetricTotal}
                    playMetricBaseTotal={this.props.playMetricBaseTotal}
                   />
          })
        }
      </div>
    )
  }
}

export default FighterDetailsList;
