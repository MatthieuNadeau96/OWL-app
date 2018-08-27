import React from 'react';



const TeamRoster = props => {

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
          this.props.rosterList.map(item => (
            <li key={item.player.id}>
              <span>{item.player.name}</span> <br/>{item.player.givenName} {item.player.familyName}
            </li>
          ))
        }
      </ul>
    </div>
  </div>
};

export default TeamRoster;




// {
//   this.props.playerList.length > 0 ? this.props.playerList.map(team => {
//     return (
//       <div className="card" key={team.id}>
//         <img alt="teamlogo" className="logo" src={team.logo}/>
//         <div className="textContainer">
//           <div className="title">{team.name}</div>
//           <div className="homeLocation">{team.homeLocation}</div>
//         </div>
//         <div className="viewRosterContainer">
//           <div className="viewRosterBtn">View Roster</div>
//         </div>
//       </div>
//     )
//   }) : null
// }
