import React, { Component } from 'react';

class TeamPage extends Component {

  render() {
    return (
      <div>
        <h1>Teams:</h1>
        <div className="container">
          {
            this.props.teamList.length > 0 ? this.props.teamList.map(team => {
              return (
                <div className="card" key={team.id}>
                  <img className="logo" src={team.logo}/>
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
      </div>
    );
  }

}

export default TeamPage;
