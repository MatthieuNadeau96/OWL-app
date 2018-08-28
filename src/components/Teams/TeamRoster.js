import React from 'react';

const TeamRoster = (props) => (
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
          this.props.BOS.length > 0 ? this.props.BOS.map(p => {
            return (
              <li key={p.player.id}>
                <span>{p.player.name}</span> <br/>{p.player.givenName} {p.player.familyName}
              </li>
            )
          }) : null
        }
      </ul>
    </div>
  </div>
);

export default TeamRoster;
