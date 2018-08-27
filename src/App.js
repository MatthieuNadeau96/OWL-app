import React, { Component } from 'react';
import './App.css';

import TeamPage from './components/Teams/TeamPage';

 // api: https://api.overwatchleague.com/

class App extends Component {

  state = {
    teamList: [],
    rosterList: [],
    rosterClicked: false
  }

  getApi = async (e) => {
    const api_call = await fetch('https://api.overwatchleague.com/teams');
    const data = await api_call.json()

    // const rosterList = data.competitors.competitor.players.map(playerResults => (
    //   {
    //     id: `${playerResults.player.id}`,
    //     name: `${playerResults.player.name}`,
    //     givenName: `${playerResults.player.givenName}`,
    //     familyName: `${playerResults.player.familyName}`,
    //     role: `${playerResults.player.role}`
    //   }
    // ))


    const teamList = data.competitors.map(teamResults => (
      {
        id: `${teamResults.competitor.id}`,
        name: `${teamResults.competitor.name}`,
        homeLocation: `${teamResults.competitor.homeLocation}`,
        abbreviatedName: `${teamResults.competitor.abbreviatedName}`,
        primaryColor: `${teamResults.competitor.primaryColor}`,
        secondaryColor: `${teamResults.competitor.secondaryColor}`,
        logo: `${teamResults.competitor.logo}`,
        icon: `${teamResults.competitor.icon}`
      }
    ))
    
    const teams = data.competitors.filter(team => team.competitor.name === "Dallas Fuel").map(roster => roster.competitor.players);

    const rosterList = teams[0];


    // console.log(teams[0]);
    this.setState({
      teamList,
      rosterList
    })
  }

  render() {
    let { rosterList } = this.state;

    return (
      <div className="App">
        <TeamPage teamList={this.state.teamList} getApi={this.getApi()} showRoster={this.showRoster}/>
          <div className="rightSide">
            <ul>
              {rosterList.map(item => (
                <li key={item.player.id}>
                  Name: {item.player.name} | {item.player.familyName}
                </li>
              ))}
            </ul>
          </div>
      </div>
    );
  }
}

export default App;
