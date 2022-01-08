import React from 'react';
import './Fighter.css';

//        <img src={this.props.image} style={{/*opacity: this.props.playMetric / this.props.maxMetric,*/ top: "0px", position: "absolute", zIndex: -1}}></img>

class Fighter extends React.Component {
  render() {

    let championColor = `rgb(${255 - this.props.championRating * 37}, ${this.props.championRating * 37}, 0)`;

    let styles = {
      backgroundImage: "url("+this.props.image+")",
      opacity: this.props.playMetric / this.props.maxMetric,
      borderColor: championColor
    }

    let nameSpacing;
    if (this.props.counterRow) {
      nameSpacing = {
        top: 90
      }
    } else {
      nameSpacing = {
        top: 90
      }
    }

    return (
      <div className="fighter box" style={styles}>
        <div className="metric">{this.props.counterRow ? this.props.counterRating : <div></div>}</div>
        <div className="name" style={nameSpacing}>{this.props.name}<br/>{this.props.selectionChances}%</div>
      </div>
    );
  }
}

export default Fighter;
