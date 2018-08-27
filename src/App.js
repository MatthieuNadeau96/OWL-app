import React, { Component } from 'react';
import './App.css';

import TeamPage from './components/Teams/TeamPage';
import TeamRoster from './components/Teams/TeamRoster';

 // api: https://api.overwatchleague.com/

class App extends Component {

  state = {
    teamList: [],
    teamNamesList: [],
    rosterList: [],
    selectedTeam: undefined,
    rosterClosed: false,
    DAL: [],
    PHI: [],
    HOU: [],
    BOS: [],
    NYE: [],
    SFS: [],
    VAL: [],
    GLA: [],
    FLA: [],
    SHD: [],
    SEO: [],
    LDN: []
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

    const teamNamesList = data.competitors.map(team => team.competitor.name);
    // const rosterList = teams[0];

    // const teamPlayersList = data.competitors.filter(team => (team.competitor.name === teamNamesList));

    let DAL = [];
    let PHI = [];
    let HOU = [];
    let BOS = [];
    let NYE = [];
    let SFS = [];
    let VAL = [];
    let GLA = [];
    let FLA = [];
    let SHD = [];
    let SEO = [];
    let LDN = [];

    const teamTeamTeam = teamNamesList.map(teams => {
      if(teams === "Dallas Fuel") {
        DAL = data.competitors
          .filter(team => team.competitor.name === "Dallas Fuel")
          .map(roster => roster.competitor.players);
      } else if (teams === "Philadelphia Fusion") {
        PHI = data.competitors
          .filter(team => team.competitor.name === "Philadelphia Fusion")
          .map(roster => roster.competitor.players);
      } else if (teams === "Houston Outlaws") {
        HOU = data.competitors
          .filter(team => team.competitor.name === "Houston Outlaws")
          .map(roster => roster.competitor.players);
      } else if (teams === "Boston Uprising") {
        BOS = data.competitors
          .filter(team => team.competitor.name === "Boston Uprising")
          .map(roster => roster.competitor.players);
      } else if (teams === "New York Excelsior") {
        NYE = data.competitors
          .filter(team => team.competitor.name === "New York Excelsior")
          .map(roster => roster.competitor.players);
      } else if (teams === "San Francisco Shock") {
        SFS = data.competitors
          .filter(team => team.competitor.name === "San Francisco Shock")
          .map(roster => roster.competitor.players);
      } else if (teams === "Los Angeles Valiant") {
        VAL = data.competitors
          .filter(team => team.competitor.name === "Los Angeles Valiant")
          .map(roster => roster.competitor.players);
      } else if (teams === "Los Angeles Gladiators") {
        GLA = data.competitors
          .filter(team => team.competitor.name === "Los Angeles Gladiators")
          .map(roster => roster.competitor.players);
      } else if (teams === "Florida Mayhem") {
        FLA = data.competitors
          .filter(team => team.competitor.name === "Florida Mayhem")
          .map(roster => roster.competitor.players);
      } else if (teams === "Shanghai Dragons") {
        SHD = data.competitors
          .filter(team => team.competitor.name === "Shanghai Dragons")
          .map(roster => roster.competitor.players);
      } else if (teams === "Seoul Dynasty") {
        SEO = data.competitors
          .filter(team => team.competitor.name === "Seoul Dynasty")
          .map(roster => roster.competitor.players);
      } else if (teams === "London Spitfire") {
        LDN = data.competitors
          .filter(team => team.competitor.name === "London Spitfire")
          .map(roster => roster.competitor.players);
      } else {
        return null;
      }
    })
    // console.log("Fuel: " + dallasFuel[0].map(p => p.player.name));
    // console.log("Fusion: " + phillyFusion[0].map(p => p.player.name));
    // console.log("Outlaws: " + houstonOutlaws[0].map(p => p.player.name));
    // console.log("Uprising: " + bostonUprising[0].map(p => p.player.name));
    // console.log("Dynasty: " + seoulDynasty[0].map(p => p.player.name));
    // console.log("NYXL: " + newYorkExcelsior[0].map(p => p.player.name));

    this.setState({
      teamList,
      DAL,
      PHI,
      HOU,
      BOS,
      NYE,
      SFS,
      VAL,
      GLA,
      FLA,
      SHD,
      SEO,
      LDN
    })
    // console.log(teamNamesList);
  }

  toggleRoster = (val) => {
    if (this.state.rosterClosed === false) {
      console.log(this.state.val[0].map(p => p.player.name))
    } else {
      console.log("closed")
    }

    this.setState((prevState) => {
      return {rosterClosed: !prevState.rosterClosed}
    })

  }

  render() {

    return (
      <div className="App">
        <TeamPage teamList={this.state.teamList} getApi={this.getApi()} toggleRoster={this.toggleRoster} id={this.state.id} />
      </div>
    );
  }
}

export default App;
