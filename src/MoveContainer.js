import React from 'react'

class MoveContainer extends React.Component {

  render() {
    return (
      <div>
        {this.props.toggle ?
          <div onClick={this.props.handleClick}>
            <p1 id='move1'>{this.props.team1[this.props.team1Idx].move.name}</p1>
            <br/>
            <p2 id='move2'>Water</p2>
            <br/>
            <p3 id='move3'>Air</p3>
            <br/>
            <p4 id='move4'>Earth</p4>
            <br/>
            <p5 id='hp'>{this.props.team1pokemonHP}</p5>
          </div>
        :
          <div onClick={this.props.handleClick}>
            <p1 id='move1'>{this.props.team2[this.props.team2Idx].move.name}</p1>
            <br/>
            <p2 id='move2'>Water</p2>
            <br/>
            <p3 id='move3'>Air</p3>
            <br/>
            <p4 id='move4'>Earth</p4>
            <br/>
            <p5 id='hp'>{this.props.team2pokemonHP}</p5>
          </div>
        }
      </div>
    )
  }
}

export default MoveContainer
