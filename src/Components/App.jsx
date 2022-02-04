import './App.css';
import React from 'react';
import DataCollectionPage from './data-collection-page/DataCollectionPage';
import LandingPage from './landing-page/LandingPage';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      page: true
    }
  }

  // landing page = true; data page = false
  changePage = (event)=>{
    this.setState({
      page: false
    });
  }

  render(){
    let page;
    if (this.state.page ){
      page = <LandingPage parentCallback = {this.changePage}/>;
    }
    else{
      page = <DataCollectionPage/>;
    }
    
    return(
      <React.Fragment>
        
        {page}
        {/* <button type="button" onClick={this.changePage}>To Data Collection Page</button> */}
      </React.Fragment>
    )
  }
}

export default App;