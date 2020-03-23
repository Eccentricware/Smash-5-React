import React from 'react';

class ModeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.selectMode(document.querySelector(".modeSelector").value);
  }

  render() {
    return (
      <select className="modeSelector" onChange={this.handleChange}>
        <option value="favoredRandom">Favored Random </option>
        <option value="specialistRandom">Specialist Random</option>
        <option value="squadStrike3">Squad Strike | 3</option>
        <option value="squadStrike5">Squad Strike | 5</option>
      </select>
    )
  }
}

export default ModeSelector;
