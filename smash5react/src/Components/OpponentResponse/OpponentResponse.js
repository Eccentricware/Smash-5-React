import React from 'react';

class OpponentResponse extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.setChallengedState(document.querySelector(".opponent-response").value);
  }

  render() {
    return (
      <select className="opponent-response" onChange={this.handleChange}>
        <option value="0">Chaos Sets</option>
        <option value="1">Rematch</option>
        <option value="2">Counter</option>
      </select>
    )
  }
}

export default OpponentResponse;
