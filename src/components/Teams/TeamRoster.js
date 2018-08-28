import React, { Component } from 'react';

import support from '../../img/SUPPORT.png';
import dps from '../../img/DPS.png';
import flex from '../../img/FLEX.png';
import tank from '../../img/TANK.png';

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
                    <span>{player.userName}</span> <br/>{player.firstName} {player.lastName} <br/>
                      {(() => {
                        switch (player.role) {
                          case 'support': return <img src={support}/>;
                          case 'offense': return <img src={dps}/>;
                          case 'flex': return <img src={flex}/>;
                          case 'tank': return <img src={tank}/>;
                        }
                      })()}
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
