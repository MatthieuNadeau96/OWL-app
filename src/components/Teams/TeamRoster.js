import React from 'react';

const TeamRoster = props => (
  <div className="teamRoster">
    {
      this.props.playerList.length > 0 ? this.props.playerList.map(team => {
        return (
          <div className="card" key={team.id}>
            <img alt="teamlogo" className="logo" src={team.logo}/>
            <div className="textContainer">
              <div className="title">{team.name}</div>
              <div className="homeLocation">{team.homeLocation}</div>
            </div>
            <div className="viewRosterContainer">
              <div className="viewRosterBtn">View Roster</div>
            </div>
          </div>
        )
      }) : null
    }
  </div>
);

export default TeamRoster;
