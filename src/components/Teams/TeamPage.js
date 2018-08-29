import React, { Component } from 'react';

class TeamPage extends Component {

  render() {
    return (
      <div className="display">
        <button className={this.props.displayTeams ? 'displayTeamsBtn hideBtn' : 'displayTeamsBtn'} onClick={this.props.getApi}>Get</button>
        <div className="container">
          {
            this.props.teamList.length > 0 ? this.props.teamList.map(team => {
              return (
                <div className="card" key={team.name}>
                  <img alt="teamlogo" className="logo" src={team.logo}/>
                  <div className="textContainer">
                    <div className="title">{team.name}</div>
                    <div className="homeLocation">{team.homeLocation}</div>
                  </div>
                  <div className="viewRosterContainer" id={team.abbreviatedName} onClick={(id) => this.props.toggleRoster(id)}>
                    <div className="viewRosterBtn" id={team.abbreviatedName}>View Roster</div>
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
