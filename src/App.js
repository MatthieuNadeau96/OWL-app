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
    this.setState({
      teamList
    })
  }

  render() {
    return (
      <div className="App">
        <TeamPage teamList={this.state.teamList} getApi={this.getApi()} showRoster={this.showRoster}/>
      </div>
    );
  }
}

export default App;
