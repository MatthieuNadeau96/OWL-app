import React, { Component } from 'react';

class TeamRoster extends Component {

  render() {
    return (
      <div className="teamRoster">
        <div className="leftSide">
          <img className="icon" alt="teamIcon"/>
          <div className="teamName">Dallas Fuel</div>
          <div className="teamLocation">Dallas, TX</div>
          <div className="teamDivision">Pacific Division</div>
        </div>
        <div className="rightSide">
          <ul>
            {
              this.props.theTeam.map(player => {
                return (
                  <li key={player.id}>
                    <span>{player.userName}</span> <br/>{player.firstName} {player.lastName}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }

}

export default TeamRoster;
