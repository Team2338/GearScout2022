import './App.css';
import React from 'react';
import DataCollectionPage from './data-collection-page/DataCollectionPage';
import LandingPage from './landing-page/LandingPage';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      page: true,
      teamNumber: "",
      eventCode: "",
      secretCode: "",
      scoutingTeamNumber: ""
    }
  }

  // landing page = true; data page = false
  changePage = (event, teamNumber, eventCode, secretCode, scoutingTeamNumber)=>{
    this.setState({
      page: false,
      teamNumber: teamNumber,
      eventCode: eventCode,
      secretCode: secretCode,
      scoutingTeamNumber: scoutingTeamNumber
    });
  }

  render(){
    let page;
    if (this.state.page){
      page = <LandingPage parentCallback = {this.changePage}/>;
    }
    else{
      page = <DataCollectionPage teamNumber={this.state.teamNumber} eventCode={this.state.eventCode} secretCode={this.state.secretCode} scoutingTeamNumber={this.state.scoutingTeamNumber}/>;
    }
    
    return(
      <React.Fragment>
        {page}
      </React.Fragment>
    )
  }
}

export default App;