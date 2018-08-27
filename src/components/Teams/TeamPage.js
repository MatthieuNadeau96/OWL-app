import React, { Component } from 'react';

class TeamPage extends Component {

  render() {
    return (
      <div>
        <div className="container">
          {
            this.props.teamList.length > 0 ? this.props.teamList.map(team => {
              return (
                <div className="card" key={team.name} id={team.abbreviatedName}>
                  <img alt="teamlogo" className="logo" src={team.logo}/>
                  <div className="textContainer">
                    <div className="title">{team.name}</div>
                    <div className="homeLocation">{team.homeLocation}</div>
                  </div>
                  <div className="viewRosterContainer" onClick={this.props.toggleRoster(team.id)}>
                    <div className="viewRosterBtn">View Roster</div>
                  </div>
                </div>
              )
            }) : null
          }
        </div>
      </div>
    );
  }

}

export default TeamPage;
