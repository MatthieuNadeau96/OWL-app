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
    rosterClosed: true,
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
    LDN: [],
    theTeam: []
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
        const newDAL = DAL[0].map(p => (
          {
            id: `${p.player.id}`,
            userName: `${p.player.name}`,
            firstName: `${p.player.givenName}`,
            lastName: `${p.player.familyName}`
          }
        ))
        this.setState({DAL: newDAL});
      } if (teams === "Philadelphia Fusion") {
        PHI = data.competitors
          .filter(team => team.competitor.name === "Philadelphia Fusion")
          .map(roster => roster.competitor.players);
        const newPHI = PHI[0].map(p => (
          {
            id: `${p.player.id}`,
            userName: `${p.player.name}`,
            firstName: `${p.player.givenName}`,
            lastName: `${p.player.familyName}`
          }
        ))
        this.setState({PHI: newPHI});
      } if (teams === "Houston Outlaws") {
        HOU = data.competitors
          .filter(team => team.competitor.name === "Houston Outlaws")
          .map(roster => roster.competitor.players);
        const newHOU = HOU[0].map(p => (
          {
            id: `${p.player.id}`,
            userName: `${p.player.name}`,
            firstName: `${p.player.givenName}`,
            lastName: `${p.player.familyName}`
          }
        ))
        this.setState({HOU: newHOU});
      } if (teams === "Boston Uprising") {
        BOS = data.competitors
          .filter(team => team.competitor.name === "Boston Uprising")
          .map(roster => roster.competitor.players);
        const newBOS = BOS[0].map(p => (
          {
            id: `${p.player.id}`,
            userName: `${p.player.name}`,
            firstName: `${p.player.givenName}`,
            lastName: `${p.player.familyName}`
          }
        ))
        this.setState({BOS: newBOS});
      } if (teams === "New York Excelsior") {
        NYE = data.competitors
          .filter(team => team.competitor.name === "New York Excelsior")
          .map(roster => roster.competitor.players);
        const newNYE = NYE[0].map(p => (
          {
            id: `${p.player.id}`,
            userName: `${p.player.name}`,
            firstName: `${p.player.givenName}`,
            lastName: `${p.player.familyName}`
          }
        ))
        this.setState({NYE: newNYE});
      } if (teams === "San Francisco Shock") {
        SFS = data.competitors
          .filter(team => team.competitor.name === "San Francisco Shock")
          .map(roster => roster.competitor.players);
        const newSFS = SFS[0].map(p => (
          {
            id: `${p.player.id}`,
            userName: `${p.player.name}`,
            firstName: `${p.player.givenName}`,
            lastName: `${p.player.familyName}`
          }
        ))
        this.setState({SFS: newSFS});
      } if (teams === "Los Angeles Valiant") {
        VAL = data.competitors
          .filter(team => team.competitor.name === "Los Angeles Valiant")
          .map(roster => roster.competitor.players);
        const newVAL = VAL[0].map(p => (
          {
            id: `${p.player.id}`,
            userName: `${p.player.name}`,
            firstName: `${p.player.givenName}`,
            lastName: `${p.player.familyName}`
          }
        ))
        this.setState({VAL: newVAL});
      } if (teams === "Los Angeles Gladiators") {
        GLA = data.competitors
          .filter(team => team.competitor.name === "Los Angeles Gladiators")
          .map(roster => roster.competitor.players);
        const newGLA = GLA[0].map(p => (
          {
            id: `${p.player.id}`,
            userName: `${p.player.name}`,
            firstName: `${p.player.givenName}`,
            lastName: `${p.player.familyName}`
          }
        ))
        this.setState({GLA: newGLA});
      } if (teams === "Florida Mayhem") {
        FLA = data.competitors
          .filter(team => team.competitor.name === "Florida Mayhem")
          .map(roster => roster.competitor.players);
        const newFLA = FLA[0].map(p => (
          {
            id: `${p.player.id}`,
            userName: `${p.player.name}`,
            firstName: `${p.player.givenName}`,
            lastName: `${p.player.familyName}`
          }
        ))
        this.setState({FLA: newFLA});
      } if (teams === "Shanghai Dragons") {
        SHD = data.competitors
          .filter(team => team.competitor.name === "Shanghai Dragons")
          .map(roster => roster.competitor.players);
        const newSHD = SHD[0].map(p => (
          {
            id: `${p.player.id}`,
            userName: `${p.player.name}`,
            firstName: `${p.player.givenName}`,
            lastName: `${p.player.familyName}`
          }
        ))
        this.setState({SHD: newSHD});
      } if (teams === "Seoul Dynasty") {
        SEO = data.competitors
          .filter(team => team.competitor.name === "Seoul Dynasty")
          .map(roster => roster.competitor.players);
        const newSEO = SEO[0].map(p => (
          {
            id: `${p.player.id}`,
            userName: `${p.player.name}`,
            firstName: `${p.player.givenName}`,
            lastName: `${p.player.familyName}`
          }
        ))
        this.setState({SEO: newSEO});
      } if (teams === "London Spitfire") {
        LDN = data.competitors
          .filter(team => team.competitor.name === "London Spitfire")
          .map(roster => roster.competitor.players);
        const newLDN = LDN[0].map(p => (
          {
            id: `${p.player.id}`,
            userName: `${p.player.name}`,
            firstName: `${p.player.givenName}`,
            lastName: `${p.player.familyName}`
          }
        ))
        this.setState({LDN: newLDN});
      } else {
        return null;
      }
    })

    this.setState({teamList})
  }

  toggleRoster = (e) => {
    let {DAL,PHI,HOU,BOS,NYE,SFS,VAL,GLA,FLA,SHD,SEO,LDN} = this.state;
    console.log(e.target);
    if (this.state.rosterClosed === false) {
      const i = e.target.id
      if(i === "DAL") {
        console.log(DAL)
        this.setState({theTeam: DAL});
      }
      if (i === "PHI") {
        console.log(PHI)
        this.setState({theTeam: PHI});
      }
      if (i === "HOU") {
        console.log(HOU)
        this.setState({theTeam: HOU});
      }
      if (i === "BOS") {
        console.log(BOS)
        this.setState({theTeam: BOS});
      }
      if (i === "NYE") {
        console.log(NYE)
        this.setState({theTeam: NYE});
      }
      if (i === "SFS") {
        console.log(SFS)
        this.setState({theTeam: SFS});
      }
      if (i === "VAL") {
        console.log(VAL)
        this.setState({theTeam: VAL});
      }
      if (i === "GLA") {
        console.log(GLA)
        this.setState({theTeam: GLA});
      }
      if (i === "FLA") {
        console.log(FLA)
        this.setState({theTeam: FLA});
      }
      if (i === "SHD") {
        console.log(SHD)
        this.setState({theTeam: SHD});
      }
      if (i === "SEO") {
        console.log(SEO)
        this.setState({theTeam: SEO});
      }
      if (i === "LDN") {
        console.log(LDN)
        this.setState({theTeam: LDN});
      }
    }
    else {
      console.log("closed")
    }

    this.setState((prevState) => {
      return {
        rosterClosed: !prevState.rosterClosed
      }
    })

  }

  render() {
    const {rosterClosed} = this.state;
    return (
      <div className="App">
        <TeamPage teamList={this.state.teamList} getApi={this.getApi} toggleRoster={this.toggleRoster} />
        {
          !rosterClosed ? <TeamRoster theTeam={this.state.theTeam}/> : null
        }

      </div>
    );
  }
}

export default App;
