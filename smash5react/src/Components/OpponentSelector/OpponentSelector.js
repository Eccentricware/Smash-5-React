import React from 'react';

class OpponentSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.selectOpponent(document.querySelector(".opponentSelector").value);
  }

  render() {
    return (
      <select className="opponentSelector" onChange={this.handleChange}>
        <option value="defaultOpponent">Select Opponent</option>
        {
          this.props.roster.all.map(fighter => {
            return <option key={fighter.id} value={fighter.keyName}>{fighter.name}</option>
          })
        }
      </select>
    )
  }
}

export default OpponentSelector
